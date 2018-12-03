const express = require('express');
const bodyParser = require('body-parser');

const cnn = require('./cnn');
const guardian = require('./guardian');
const techcrunch = require('./techcrunch');
const { addUser } = require('./mongoose-queries');

const apiRouter = express.Router();

apiRouter.use(bodyParser.json({ type: 'application/json' }));

apiRouter.get('/cnn/everything', cnn.getAllNewsData);
apiRouter.get('/cnn/top-headlines', cnn.getTopHeadlines);
apiRouter.get('/cnn/everything/:page', cnn.paginatedNews);
apiRouter.get('/guardian/world', guardian.worldNews);
apiRouter.get('/guardian/world/:page', guardian.paginatedWorldNews);
apiRouter.get('/techcrunch/top-headlines', techcrunch.getTopHeadlines);

apiRouter.post('/users', addUser);

module.exports = apiRouter;
