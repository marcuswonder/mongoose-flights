const mongoose = require('mongoose');
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],

    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
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
            const newDate = new Date()
            newDate.setFullYear(newDate.getFullYear() + 1)
            return newDate
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model("Flight", flightSchema)