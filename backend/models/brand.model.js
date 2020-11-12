const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: {type: String, unique: true, required: true}
}, {
    timestamps: true
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;