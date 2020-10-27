const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pieceSchema = new Schema({
    name: {type: String, required: true},
    category: {type: Schema.Types.ObjectId, ref:"Category", required: true},
    style: {type: Schema.Types.ObjectId, ref:"Style", required: false},
    material: {type: Schema.Types.ObjectId, ref: "Material", required: true},
    color: {type: Schema.Types.ObjectId, ref: "Color", required: true},
    description: {type: String, required: true},
    brand: {type: Schema.Types.ObjectId, ref: "Material", required: true},
}, {
    timestamps: true
});

const Piece = mongoose.model("Piece", pieceSchema);

module.exports = Piece;