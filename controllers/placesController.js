const Place = require('../models/PlaceModel');

function addPlace (req, res) {

  let placeModel = {
    fourSquareId: req.body.fourSquareId,
    name: req.body.name,
    location: {
      address: req.body.location.address,
      cc: req.body.location.cc,
      city: req.body.location.cc,
      country: req.body.location.country,
      crossStreet: req.body.crossStreet,
      latlng: {
        lat: req.body.location.latlng.lat,
        lng: req.body.location.latlng.lng,
      },
      postalCode: req.body.postalCode,
      state: req.body.state,
    },
    placeCategories: {
      categoryId: req.body.placeCategories.categoryId,
      categoryName: req.body.placeCategories.categoryName,
      pluralCategoryName: req.body.placeCategories.pulralCategoryName,
      categoryShortName: req.body.placeCategories.categoryShortName
    }
  }

  Place.findOneAndUpdate(
    //find by fourSquareId
    {"fourSquareId": placeModel.fourSquareId},
    //update these fields:
    { $set: 
      {
        "fourSquareId": placeModel.fourSquareId,
        "name": placeModel.name,
        "location.address": placeModel.location.address,
        "location.cc": placeModel.location.cc,
        "location.city:" : placeModel.location.cc,
        "location.country": placeModel.location.country,
        "location.crossStreet":placeModel.location.crossStreet,
        "location.latlng.lat": placeModel.location.latlng.lat,
        "location.latlng.lng": placeModel.location.latlng.lng,
        "location.postalCode": placeModel.location.postalCode,
        "location.state:": placeModel.location.state,
        "placeCategories.categoryId:": placeModel.placeCategories.categoryId,
        "placeCategories.categoryName:": placeModel.placeCategories.categoryName,
        "placeCategories.pluralCategoryName:": placeModel.placeCategories.pulralCategoryName,
        "placeCategories.categoryShortName:": placeModel.placeCategories.categoryShortName
      },
    },

    {
      "upsert": true,
      "new": true
    }, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("RESULT: " + result);
      res.json(result)
    }
    
  )
}

module.exports = {
  addPlace
}