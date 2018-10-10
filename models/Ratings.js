const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingsSchema = new Schema({
  fourSquareId: String,
  ratings: {
    Q1_Score: Number,
    Q2_Score: Number
  }
  
});

module.exports = mongoose.model('Ratings', ratingsSchema);