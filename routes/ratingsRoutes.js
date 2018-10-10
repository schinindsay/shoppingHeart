const _ = require('lodash');

//keep for future login requirements
// const requireLogin = require('../middlewares/requireLogin');
const ratingsRouter = require('express').Router();

//ratings is my controller
const ratings = require('../controllers/ratings.controller');


//add a question to db
ratingsRouter.route('/api/ratings').post(ratings.createRating);

//add a question to db
ratingsRouter.route('/api/ratings/new').post(ratings.addRating);


module.exports = ratingsRouter;



//https://code.i-harness.com/en/q/6ee31e