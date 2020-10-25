const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const colorSchema = new Schema({
    name: {type: String, unique: true, required: true}
}, {
    timestamps: true
});

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;