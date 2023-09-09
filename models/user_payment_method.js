const { default: mongoose } = require("mongoose");

const user_payment_methodSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  payment_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment_type",
  },
  provider: String,
  account_number: Number,
  expire_date: Date,
});

const User_payment_method = mongoose.model(
  "User_payment_method",
  user_payment_methodSchema
);
module.exports = User_payment_method;
