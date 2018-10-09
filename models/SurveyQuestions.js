const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  name: String,
  text: String,
  category: String
});

module.exports = mongoose.model('surveyQuestions', questionSchema);