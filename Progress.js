const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const progressSchema = new Schema({
    percent: {
        type: Number,
        required: true
    },
    participant: {
        type: Number,
        required: true
    }
}, { timestamps: true, collection:'progress' });


module.exports = mongoose.model("Progress", progressSchema);