const axios = require('axios');
const NEWSAPI_ORG_KEY = 'de76f7af4b944ae08777fef8c1580be6';

const getAllNewsData = (req, res) => {
  const url = 'https://newsapi.org/v2/everything?sources=cnn&apiKey=' + NEWSAPI_ORG_KEY;

  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json("error cnn response"))
}

const getTopHeadlines = (req, res) => {
  const url = 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=' + NEWSAPI_ORG_KEY;

  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json('error cnn top headlines'))
}

const paginatedNews = (req, res) => {
  const page = req.params.page;
  const url = 'https://newsapi.org/v2/everything?sources=cnn&apiKey=' + NEWSAPI_ORG_KEY + '&page=' + page;

  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json("error cnn response"))
}

module.exports = {
  getAllNewsData,
  getTopHeadlines,
  paginatedNews
}
