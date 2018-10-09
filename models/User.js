const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  googleId: String,
  reviews: []
});

mongoose.model('users', userSchema);