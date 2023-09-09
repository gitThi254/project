const { default: mongoose } = require("mongoose");

const order_statusSchema = new mongoose.Schema({
  status: String,
  shop_order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop_order",
    },
  ],
});

const Order_status = mongoose.model("Order_status", order_statusSchema);

module.exports = Order_status;
