const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pieceSchema = new Schema({
    category: {type: Schema.Types.ObjectId, ref:"Category", required: true},
    style: {type: Schema.Types.ObjectId, ref:"Style", required: false},
    material: {type: Schema.Types.ObjectId, ref: "Material", required: true},             //REQUIRED TO BE TRUE!!!
    description: {type: String, required: true},
    brand: {type: Schema.Types.ObjectId, ref: "Material", required: true},                 //REQUIRED TO BE TRUE!!!
    productionYear: {type: Date, required: false}
}, {
    timestamps: true
});

const Piece = mongoose.model("Piece", pieceSchema);

module.exports = Piece;