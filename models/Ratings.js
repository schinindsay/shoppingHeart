const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingsSchema = new Schema({
  fourSquareId: String,
  ratings: {
    Q1_Score: { yes: Number, no: Number},
    Q2_Score: {yes: Number, no: Number},
    Q3_Score: { yes: Number, no: Number },
    Q4_Score: { yes: Number, no: Number },
    Q5_Score: { yes: Number, no: Number },
    Q6_Score: { yes: Number, no: Number },
    Q7_Score: { yes: Number, no: Number },
    Q8_Score: { yes: Number, no: Number },
    Q9_Score: { yes: Number, no: Number }
  }
  
});

module.exports = mongoose.model('Ratings', ratingsSchema);