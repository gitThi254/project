const { default: mongoose } = require("mongoose");

const user_veviewsSchema = new mongoose.Schema({
  user_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  order_product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order_line",
  },
  rating_value: Number,
  Comment: String,
});

const User_reviews = mongoose.model("User_reviews", user_veviewsSchema);
module.exports = User_reviews;
