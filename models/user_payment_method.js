const { default: mongoose } = require("mongoose");

const user_payment_methodSchema = new mongoose.Schema({
  provider: String,
  account_number: Number,
  expire_date: Date,
});

const User_payment_method = mongoose.model(
  "User_payment_method",
  user_payment_methodSchema
);
module.exports = User_payment_method;
