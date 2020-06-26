const admin = require('firebase-admin');

// set up firebase admin
const serviceAccount = require('./ronr-1e07e-firebase-adminsdk-f645o-729053ef36.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ronr-1e07e.firebaseio.com',
});

module.exports = admin;
