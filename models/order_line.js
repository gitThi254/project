const { default: mongoose } = require("mongoose");

const order_lineSchema = new mongoose.Schema({
  product_item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product_item",
  },
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
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
