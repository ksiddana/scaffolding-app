const path = require('path');
const router = require('express').Router();
const restRouter = require('./api/rest-router');

// Server routes...
router.use('/api', restRouter)

router.get('*', (req, res, next) => {
    const routePath = path.join(__dirname + '..', '..', 'dist/' + 'index.html');
    res.sendFile(routePath);
  })

module.exports = router;
