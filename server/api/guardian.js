const axios = require('axios');
const searchResponse = require('../mockData/guardian-search-response.json')
GUARDIAN_API_KEY = '00b7d207-26b2-43b3-8e0a-4743d80f873b';

const worldNews = (req, res) => {
  // return res.send(searchResponse);
  const url = 'https://content.guardianapis.com/world?api-key=' + GUARDIAN_API_KEY;

  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json("error"))
};

const paginatedWorldNews = (req, res) => {
  const page = req.params.page;
  const url = 'https://content.guardianapis.com/world?' + 'api-key=' + GUARDIAN_API_KEY + '&page=' + page;

  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).send("error in query"))
};

module.exports = {
  worldNews,
  paginatedWorldNews
};
