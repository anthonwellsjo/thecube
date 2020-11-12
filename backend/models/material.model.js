const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materialSchema = new Schema({
    name: {type: String, unique: true, required: true}
}, {
    timestamps: true
});

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;