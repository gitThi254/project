const { default: mongoose } = require("mongoose");

const variationSchema = new mongoose.Schema({
  name: String,
  variation_option: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "variation_option",
    },
  ],
});

const Variation = mongoose.model("Variation", variationSchema);
module.exports = Variation;
