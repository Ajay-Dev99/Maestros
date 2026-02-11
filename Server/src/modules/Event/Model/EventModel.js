const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
    legacyCode: {
        type: String,
        required: true,
        unique: true
    },
    doctorName: {
        type: String,
        required: true
    },
    approximateParticipants: {
        type: Number,
        required: true
    },
    audienceType: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    teamLead: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'confirmed', 'cancelled', 'rescheduled'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})