const mongoose = require("mongoose");

const investSchema = new mongoose.Schema({
    username: { type: String, required: true },
    Market: { type: Number },
    Small: { type: Number },
    Pump: { type: Number },
    Plant: { type: Number },
});

module.exports = mongoose.model("Invest", investSchema);
