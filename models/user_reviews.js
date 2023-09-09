const { default: mongoose } = require("mongoose");

const user_veviewsSchema = new mongoose.Schema({
  rating_value: Number,
  Comment: String,
});

const User_reviews = mongoose.model("User_reviews", user_veviewsSchema);
module.exports = User_reviews;
