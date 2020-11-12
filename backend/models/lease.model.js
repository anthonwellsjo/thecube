const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaseSchema = new Schema({
    pieceId: {type: Number, unique: true, required: true},
    datePlannedOut: {type: Date, required: true},
    datePlannedBackIn: {type: Date, required: true},
    dateEffectiveOut: {type: Date, required: true},
    dateEffectiveBackIn: {type: Date, required: true}
}, {
    timestamps: true
});

const Lease = mongoose.model("Lease", leaseSchema);

module.exports = Lease;