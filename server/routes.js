const path = require('path');
const app = require('express').Router();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const restRouter = require('./api');
var passport = require('passport');
var cors = require('cors');
var request = require('request-promise');

var corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};



app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var auth = require('./authentication/auth');
auth(passport);
app.use(passport.initialize());

// Server routes...
app.use('/api', restRouter)

let GOOGLE_AUTH_TOKEN = '';
const TOKEN_PATH = './authentication/token.json';

const setGoogleAuthToken = (token) => {
  // fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
  //   if (err) return console.error(err);
  //   console.log('Token stored to', TOKEN_PATH);
  // });
  return GOOGLE_AUTH_TOKEN = token;
};

const getGoogleAuthToken = () => {
  return GOOGLE_AUTH_TOKEN;
}

const gmail = {
  token: null,

  getGmailLabels: function(access_token) {
    return request({
      "method": "GET",
      "uri": "https://www.googleapis.com/gmail/v1/users/ksiddana@gmail.com/labels?access_token=" + access_token,
      "json": true,
    });
  }
}

app.get('/auth/google', passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/plus.profile.emails.read',
    'https://www.googleapis.com/auth/gmail.readonly'
  ]
}));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/'}),
  (req, res) => {
    req.session.token = req.user.token;

    setGoogleAuthToken(req.user.token);

    const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
    res.redirect('/');
  }
);

app.get('/emails', (req, res) => {
  gmail.getGmailLabels(getGoogleAuthToken())
  .then(result => {
      res.json(result);
  });
})



app.get('*', (req, res, next) => {
  const routePath = path.join(__dirname + '..', '..', 'src/' + 'index.html');
  res.sendFile(routePath);
});

module.exports = app;
