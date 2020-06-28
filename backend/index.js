require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });
require('./models/db');

const chalk = require('chalk');

const express = require('express');

const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Custom Middlewares

// allow for Content-Type JSON on requests
app.use(express.json());
// allow for cookies to be set by requests - for user auth
app.use(require('cookie-parser')());
// allow for CORS requests
app.use(cors({ origin: 'http://localhost:3000', credentials: true, exposedHeaders: ['user_found'] }));
// print debuggable messages using morgan
app.use(morgan('tiny'));

// DEFAULT TESTING ROUTE
app.get('/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.use('/', require('./routers/auth'));

app.use('/api/user', require('./routers/user'));

const port = process.env.PORT || 3001;
const server = app.listen(port, () => console.log(chalk`Node listening on port {green ${port}}`));

const socket = require('./socket/init')(server);

module.exports = app;
