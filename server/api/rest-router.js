const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
// import { userRouter } from './controller/user'
const https = require('https');
const searchResponse = require('../mockData/guardian-search-response.json')
GUARDIAN_API_KEY = '00b7d207-26b2-43b3-8e0a-4743d80f873b';

module.exports = restRouter = express.Router()

restRouter.use(bodyParser.json({ type: 'application/json' }));

restRouter.get('/news', (req, res) => {
  // console.log(searchResponse);
  // return res.json(searchResponse);
  // https://content.guardianapis.com/search?api-key=00b7d207-26b2-43b3-8e0a-4743d80f873b
  const url = 'https://content.guardianapis.com/search?api-key=' + GUARDIAN_API_KEY;
  // const url1 = 'http://api.duckduckgo.com/?q=trees&format=json&pretty=1';
  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json("error"))
});

restRouter.get('/news/:page', (req, res) => {
  const page = req.params.page;

  const url = 'https://content.guardianapis.com/search?' + 'api-key=' + GUARDIAN_API_KEY + '&page=' + page;
  // res.send(req.params);
  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).send("error in query"))
});
