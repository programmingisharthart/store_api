const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: [true, "Must provide a product name"],
  },
});

const Store = mongoose.model("Store", StoreSchema);
