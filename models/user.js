const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  email_address: String,
  phone_number: Number,
  password: String,
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  shopping_cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shopping_cart",
    },
  ],
  user_review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User_view",
    },
  ],
  user_payment_method: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User_payment_method",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
