const _ = require('lodash')
const { User } = require('../db/models/user');


const addUser = (req, res) => {
  const body = _.pick(req.body, ['username', 'password']);
  const user = new User({
    email: body.username,
    password: body.password
  });

  user.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e)
  });
};

module.exports = { addUser };
