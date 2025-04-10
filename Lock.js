const mongoose = require("mongoose");

const LockSchema = new mongoose.Schema({
    username: { type: String, required: true },
    Japan: { type: String, required: true },
    City: { type: String, required: true },
    Train: { type: String, required: true },
});

module.exports = mongoose.model("Lock", LockSchema);