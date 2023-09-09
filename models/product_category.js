const { default: mongoose } = require("mongoose");

const product_categorySchema = new mongoose.Schema({
  parent_category_id: String,
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product_categorySchema",
    },
  ],
  promotion: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Promotion",
    },
  ],
  variation: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Variation",
    },
  ],
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Product_category = mongoose.model(
  "Product_category",
  product_categorySchema
);
module.exports = Product_category;
