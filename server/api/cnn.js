const axios = require('axios');
const NEWSAPI_ORG = 'de76f7af4b944ae08777fef8c1580be6';

const everything = (req, res) => {
  const url = 'https://newsapi.org/v2/everything?sources=cnn&apiKey=' + NEWSAPI_ORG;

  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json("error cnn response"))
}

const paginatedNews = (req, res) => {
  const page = req.params.page;
  const url = 'https://newsapi.org/v2/everything?sources=cnn&apiKey=' + NEWSAPI_ORG + '&page=' + page;

  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json("error cnn response"))
}

module.exports = {
  everything,
  paginatedNews
}
