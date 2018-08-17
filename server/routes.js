const path = require('path');
const app = require('express').Router();
const bodyParser = require('body-parser');
const restRouter = require('./api');

// Server routes...
app.use('/api', restRouter)

app.get('*', (req, res, next) => {
  const routePath = path.join(__dirname + '..', '..', 'src/' + 'index.html');
  res.sendFile(routePath);
});

module.exports = app;
