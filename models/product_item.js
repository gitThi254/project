const { default: mongoose } = require("mongoose");

const product_itemSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  SKU: string,
  qty_in_stock: Number,
  product_image: String,
  price: Number,
  variation_option: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Variation_option",
    },
  ],
  order_line: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order_line",
    },
  ],
  shopping_cart_item: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shopping_cart_item",
    },
  ],
});

const Product_item = mongoose.model("Product_item", product_itemSchema);
module.exports = Product_item;
