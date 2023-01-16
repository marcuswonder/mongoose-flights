const mongoose = require('mongoose');
const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],

    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: function() {
            return 'DEN'
        }
    },
    flightNo: {
        required: true,
        type: Number,
        min: [10, "Must be between 10 and 9999"],
        max: [9999, "Must be between 10 and 9999"]
    },
    departs: {
        type: Date,
        default: function() {
            return new Date() + 365*24*60*60*1000
        }
    }
})

module.exports = mongoose.model("Flight", flightSchema)