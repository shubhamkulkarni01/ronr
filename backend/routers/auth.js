const express = require('express');

const admin = require('../utils/firebase');

const router = new express.Router();

// PREPROCESSOR FOR ALL API ROUTES
router.use('/api/*', async (req, res, next) => {
  if (req.cookies.sessionCookie) {
    try {
      const sessionCookie = req.cookies.sessionCookie || '';

      const identity = await admin.auth().verifySessionCookie(sessionCookie);
      req.identity = identity;

      console.log('Identity processed via cookie, continuing.');
      return next();
    } catch (error) {
      console.log(`Failed to verify identity by cookie: ${req.cookies}`);
      res.clearCookie('sessionCookie');
      return res.status(404).send('Error: verify identity by cookie');
    }
  } else {
    // verify identity
    try {
      const identity = await admin.auth().verifyIdToken(req.body.credential);
      req.identity = identity;

      console.log('Identity processed via request body');

      const expiresIn = 60 * 60 * 24 * 1000 * 14;

      const cookie = await admin.auth().createSessionCookie(req.body.credential, { expiresIn });

      // set a session cookie
      const options = { maxAge: expiresIn, httpOnly: false, secure: false };
      res.cookie('sessionCookie', cookie, options);

      console.log('Setting session cookie');

      return next();
    } catch (error) {
      console.log(error);
      console.log(`Failed to parse identity: ${req.body}`);
      return res.status(404).send('Error: failed to parse identity');
    }
  }
});

router.post('/api/verifyIdentity', (req, res) => {
  res.status(200).send(req.identity);
});

module.exports = router;
