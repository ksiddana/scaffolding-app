const axios = require('axios');
const NEWSAPI_ORG = 'de76f7af4b944ae08777fef8c1580be6';

module.exports = (req, res) => {
  const url = 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=' + NEWSAPI_ORG;

  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json("error cnn response"))
}
