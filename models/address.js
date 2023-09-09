const { default: mongoose } = require("mongoose");

const addressSchema = new mongoose.Schema({
  unit_number: Number,
  street_number: Number,
  address_line1: String,
  address_line2: String,
  city: String,
  region: String,
  postal_code: String,
  shop_order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop_order",
    },
  ],
});

const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
