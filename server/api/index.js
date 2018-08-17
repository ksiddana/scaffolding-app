const express = require('express');
const bodyParser = require('body-parser');
const cnn = require('./cnn');
const guardian = require('./guardian');

const apiRouter = express.Router();

apiRouter.use(bodyParser.json({ type: 'application/json' }));

apiRouter.get('/cnn/everything', cnn.everything);
apiRouter.get('/cnn/everything/:page', cnn.paginatedNews);
apiRouter.get('/guardian/world', guardian.worldNews);
apiRouter.get('/guardian/world/:page', guardian.paginatedWorldNews);

module.exports = apiRouter;
