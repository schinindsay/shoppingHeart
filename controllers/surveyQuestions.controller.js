//***** https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/ */

const Question = require('../models/SurveyQuestions.js');

// Create and Save a new Question
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Question content can not be empty"
    });
  }

  // Create a Question
  const question = new Question({
    name: req.body.name,
    text: req.body.text,
    category: req.body.category
  });

  // Save Question in the database
  question.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Question."
      });
    });
};

// Retrieve and return all questions from the database.
exports.findAll = (req, res) => {
  Question.find()
    .then(questions => {
      res.send(questions);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving questions."
      });
    });
};

// // Find a single question with a questionId
// exports.findOne = (req, res) => {

// };

// // Update a Question identified by the questionId in the request
// exports.update = (req, res) => {

// };

// // Delete a question with the specified questionId in the request
// exports.delete = (req, res) => {

// };