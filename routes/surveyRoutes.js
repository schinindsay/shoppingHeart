const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');

//keep for future login requirements
// const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

  const questions = require('../controllers/surveyQuestions.controller');

  //add a question to db
  app.post('/api/questions', questions.create);

  //get questions out of db
  app.get('/api/questions', questions.findAll);

}