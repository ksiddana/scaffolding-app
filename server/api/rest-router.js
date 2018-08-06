const express = require('express');
const axios = require('axios');
// import { userRouter } from './controller/user'
const https = require('https');
GUARDIAN_API_KEY = '00b7d207-26b2-43b3-8e0a-4743d80f873b';

module.exports = restRouter = express.Router()

restRouter.get('/news', (req, res) => {
  // https://content.guardianapis.com/search?api-key=00b7d207-26b2-43b3-8e0a-4743d80f873b
  const url = 'https://content.guardianapis.com/search?api-key=' + GUARDIAN_API_KEY;
  const url1 = 'http://api.duckduckgo.com/?q=trees&format=json&pretty=1';
  axios.get(url1)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.status(500).json("Error");
    })
});

// userRouter.get('/', )
//   .get(userController.getAll)
//   .post(userController.createOne)


// export const getOne = (model) => (req, res, next) => {
//   return controllers.getOne(req.docToUpdate)
//     .then(doc => res.status(200).json(doc))
//     .catch(error => next(error))
// }
