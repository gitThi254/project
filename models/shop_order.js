const { default: mongoose } = require("mongoose");

const shop_orderSchame = new mongoose.Schema({
  useId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  order_date: Date,
  payment_method_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User_payment_method",
    },
  ],
  order_total,
});

const Shop_order = mongoose.model("Shop_order", shop_orderSchame);
module.exports = Shop_order;
