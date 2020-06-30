const admin = require('../utils/firebase');
const User = require('../models/User');
const chalk = require('chalk');


module.exports = socket => {
  socket.on('identity', async sessionCookie => {
    const identity = await admin.auth().verifySessionCookie(sessionCookie);
    socket.identity = identity
    const user = await User.findOne({email: identity.email});
    socket.user = user

    console.log(chalk.red(socket.user, socket.identity));
  })
}
