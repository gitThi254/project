const { default: mongoose } = require("mongoose");

const promotionSchema = new mongoose.Schema({
  name: String,
  description: String,
  discount_rate: Number,
  start_date: Date,
  end_date: Date,
  product_category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product_category",
    },
  ],
});

const Promotion = mongoose.model("Promotion", promotionSchema);
module.exports = Promotion;
