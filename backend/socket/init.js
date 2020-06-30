const axios = require('axios');
const chalk = require('chalk');

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

  io.on('connection', (socket) => {
    console.log('new connection to websocket', socket.id);

    socket.on('test', data => console.log(data))

    require('./auth')(socket);

    require('./meeting')(socket);
  });

  return io;
};

module.exports = init;
