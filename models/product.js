const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  product_image: String,
  product_item: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product_item",
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
