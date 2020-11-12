const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const styleSchema = new Schema({
    name: {type: String, unique: true, required: true}
}, {
    timestamps: true
});

const Style = mongoose.model("Style", styleSchema);

module.exports = Style;