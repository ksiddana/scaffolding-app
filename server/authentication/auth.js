const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new GoogleStrategy({
    clientID: '903816430746-srahsf35rr2rhjm01avnh4o5rc50a7gb.apps.googleusercontent.com',
    clientSecret: 'mOoX_IprRWfcDXl1so7G3M9M',
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }, (token, refreshToken, profile, done) => {
      // console.log(JSON.stringify(profile, undefined, 2));
      // console.log(JSON.stringify(token, undefined, 2));
      // console.log(JSON.stringify(refreshToken, undefined, 2));
        return done(null, {
          profile: profile,
          token: token
        });
  }));
};
