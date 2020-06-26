const express = require('express');

const User = require('../models/User');

const router = new express.Router();

// CREATE / READ
router.post('/login', async (req, res) => {
  console.log('request arrived to /login');

  const query = { email: req.identity.email };

  let user = await User.findOne(query);

  if (!user) {
    user = new User({
      name: req.identity.name,
      email: req.identity.email,
    });

    await user.save();
    console.log('New user created');

    res.setHeader('user_found', 0);
    return res.status(200).send(JSON.stringify(user));
  }
  console.log('User successfully found');
  console.log(user);
  res.setHeader('user_found', 1);
  return res.status(200).send(JSON.stringify(user));
});

// READ
router.get('/me', async (req, res) => {
  const query = { email: req.identity.email };

  const user = await User.findOne(query);

  console.log(user);

  if (!user) { return res.status(404).send('Cannot get a nonexistent user'); }

  return res.status(200).send(user);
});

// UPDATE
router.put('/update', async (req, res) => {
  const query = { email: req.identity.email };

  const updateObj = {
    $set: {
      name: req.body.user.name,
    },
  };

  const user = await User.findOneAndUpdate(query, updateObj, { new: true });

  if (!user) { return res.status(404).send('Cannot modify a nonexistent user'); }

  return res.status(200).send(user);
});

// DELETE
router.delete('/delete', async (req, res) => {
  const query = { email: req.identity.email };

  const user = await User.findOne(query);

  if (!user) { return res.status(404).send('Failed to delete user'); }

  await user.remove();
  return res.status(200).send({ summary: 'User deleted' });
});

module.exports = router;
