const _ = require('lodash');

//keep for future login requirements
// const requireLogin = require('../middlewares/requireLogin');
const placesRouter = require('express').Router();

//places is my controller
const places = require('../controllers/placesController');


//add or update places to db and return them
placesRouter.route('/api/places/place').post(places.addPlace);


module.exports = placesRouter;