const { default: mongoose } = require("mongoose");

const order_lineSchema = new mongoose.Schema({
  qty: Number,
  price: Number,
  user_review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User_review",
    },
  ],
});

const Order_line = mongoose.model("Order_line", order_lineSchema);
module.exports = Order_line;
