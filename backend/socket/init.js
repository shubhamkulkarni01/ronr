const axios = require('axios');
const chalk = require('chalk');

const admin = require('../utils/firebase');

const User = require('../models/User');
const Meeting = require('../models/Meeting');

const parseCookie = str =>
  str.split(';')
     .map(v => v.split('='))
     .reduce((acc, v) => {
       acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
       return acc;
     }, {});


const init = (httpServer, data) => {
  const io = require('socket.io')(httpServer);

  console.log(chalk.blue('WebSocket is live'));

  io.use(async (socket, next) => {
    if(!socket.identity){
      const { sessionCookie } = parseCookie(socket.handshake.headers.cookie);
      const identity = await admin.auth().verifySessionCookie(sessionCookie);
      socket.identity = identity
      const user = await User.findOne({email: identity.email});
      socket.user = user
      next()
    }
  }).on('connection', (socket) => {
    console.log('new connection to phaser socket', socket.id);

    socket.on('create', async (data, ack) => {
      console.log(socket.identity, socket.user)
      const meeting = new Meeting(data);
      meeting.host = socket.user._id;
      await meeting.save()
      ack()
    });
  });

  return io;
};

module.exports = init;
