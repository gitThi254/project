const { default: mongoose } = require("mongoose");

const shopping_cartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  shopping_cart_item: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shopping_cart_item",
    },
  ],
});

const Shopping_cart = mongoose.model("Shopping_cart", shopping_cartSchema);
module.exports = Shopping_cart;
