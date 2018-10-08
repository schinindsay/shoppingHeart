const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();

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
