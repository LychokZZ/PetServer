const mongoose = require("mongoose");

const stanSchema = new mongoose.Schema({
    username: { type: String, required: true },
    Eat: { type: Number, required: true },
    Sleep: { type: Number, required: true },
    Play: { type: Number, required: true },
    Health: { type: Number, required: true },
});

module.exports = mongoose.model("Stan", stanSchema);