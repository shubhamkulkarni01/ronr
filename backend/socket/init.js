const axios = require('axios');
const chalk = require('chalk');

const init = (httpServer, data) => {
  const io = require('socket.io')(httpServer);

  console.log(chalk.blue('WebSocket is live'));

  io.on('connection', (socket) => {
    console.log('new connection to phaser socket', socket.id);

    socket.emit('ready', null);
  });

  return io;
};

module.exports = init;
