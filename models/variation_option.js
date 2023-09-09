const { default: mongoose } = require("mongoose");

const variation_optionSchema = new mongoose.Schema({
  value: String,
  product_item: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product_item",
    },
  ],
});

const Variation_option = mongoose.model(
  "Variation_option",
  variation_optionSchema
);
module.exports = Variation_option;
