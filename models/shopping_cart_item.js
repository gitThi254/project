const { default: mongoose } = require("mongoose");

const shopping_cart_itemSchema = new mongoose.Schema({
  product_item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product_item",
  },
  qty: Number,
});

const Shopping_cart_item = mongoose.model(
  "Shopping_cart_item",
  shopping_cart_itemSchema
);
module.exports = Shopping_cart_item;
