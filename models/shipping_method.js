const { default: mongoose } = require("mongoose");

const shipping_methodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  shop_order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop_order",
    },
  ],
});

const Shipping_method = mongoose.model(
  "Shipping_method",
  shipping_methodSchema
);

module.exports = Shipping_method;
