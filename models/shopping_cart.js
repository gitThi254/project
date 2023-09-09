const { default: mongoose } = require("mongoose");

const shopping_cartSchema = new mongoose.Schema({
  shopping_cart_item: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shopping_cart_item",
    },
  ],
});

const Shopping_cart = mongoose.model("Shopping_cart", shopping_cartSchema);
module.exports = Shopping_cart;
