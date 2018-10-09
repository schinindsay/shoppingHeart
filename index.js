const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const cors = require('cors')

require('./models/User');
require('./models/SurveyQuestions');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(cors())
app.use(bodyParser.json());

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

require('./routes/placesRoutes')(app);
require('./routes/surveyRoutes')(app);

// //create a new instance of GoogleStrategy and tell passport to use it
// passport.use(
//   new GoogleStrategy({
//     clientID: keys.googleClientID,
//     clientSecret: keys.googleClientSecret,
//     //route where user is sent after they grant google permission to application
//     callbackURL: '/auth/google/callback'
//   }, (accessToken, refreshToken, profile, done) => {
//     console.log('access token is: ', accessToken);
//     console.log('refresh token is: ', refreshToken);
//     console.log('profile is: ', profile);
//   })
// );

// //route handler that kicks off google oauth
// app.get(
//   '/auth/google',
//   passport.authenticate('google', {
//     //specify to google what access we want to have from google profile
//     scope: ['profile', 'email']
//   })
// );

// //call callback function with profile info
// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google'),
//   (req, res) => {
//     res.redirect('/');
//   }
// );

const PORT = process.env.PORT || 5000;
app.listen(PORT);
