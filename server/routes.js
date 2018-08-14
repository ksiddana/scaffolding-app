const path = require('path');
const router = require('express').Router();
const bodyParser = require('body-parser');
const restRouter = require('./api/rest-router');

// Server routes...
router.use('/api', restRouter)

router.get('*', (req, res, next) => {
  const routePath = path.join(__dirname + '..', '..', 'src/' + 'index.html');
  res.sendFile(routePath);
});

module.exports = router;
