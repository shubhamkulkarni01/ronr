require('dotenv').config();

const express = require('express');

const cors = require('cors');
const morgan = require('morgan');

const app = express();

//Custom Middlewares

//allow for Content-Type JSON on requests
app.use(express.json());
//allow for cookies to be set by requests - for user auth
app.use(require('cookie-parser')());
//allow for CORS requests
app.use(cors({ origin: 'http://localhost:3000', credentials: true, exposedHeaders: ['user_found'] }));
//print debuggable messages using morgan
app.use(morgan('tiny'));

// DEFAULT TESTING ROUTE
app.get('/test', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3000, () => console.log('Node running on localhost:3000'));

module.exports = app;
