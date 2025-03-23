const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    username: { type: String, required: true },
    Rice: { type: Number },
    Fish: { type: Number },
    Seaweed: { type: Number },
    Meat: { type: Number },
    Milk: { type: Number },
    Salad: { type: Number },
    Pill: { type: Number },
    Inject: { type: Number },
    Balance: { type: Number },

});

module.exports = mongoose.model("Product", productSchema);
