const { default: mongoose } = require("mongoose");

const payment_typeSchema = new mongoose.Schema({
  value: Number,
  user_payment_method: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User_payment_method",
    },
  ],
});

const Payment_type = mongoose.model("Payment_type", payment_typeSchema);
module.exports = Payment_type;
