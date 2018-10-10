const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlaceSchema = new Schema({
  fourSquareId: String,
  name: String,
  location: {
    address: String,
    cc: String,
    city: String,
    country: String,
    crossStreet: String,
    latlng: {
      lat: Number,
      lng: Number,
    },
    postalCode: String,
    state: String,
  },
    placeCategories: [{
      categoryId: String,
      categoryName: String,
      pluralCategoryName: String,
      categoryShortName: String
    }],
    ratings: {
      Q1_Score: Number,
      Q2_Score: Number
    }
});

module.exports = mongoose.model('Place', PlaceSchema);