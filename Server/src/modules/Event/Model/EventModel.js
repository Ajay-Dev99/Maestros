const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    legacyCode: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    eventDateTime: {
        type: Date,
        required: true,
        index: true
    },

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    teamLead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    approximateParticipants: {
        type: Number,
        required: true,
        min: 0
    },

    actualParticipants: {
        type: Number,
        min: 0
    },

    audienceType: {
        type: String,
        enum: ['doctors', 'nurses', 'medical_staff'],
        required: true
    },

    address: String,
    city: { type: String, index: true },
    state: String,

    requirements: {
        type: [String],
        default: []
    },

    status: {
        type: String,
        enum: [
            'created',
            'assigned',
            'confirmed',
            'conducted',
            'completed',
            'cancelled',
            'rescheduled'
        ],
        default: 'created',
        index: true
    },

    rescheduledDates: {
        type: [Date],
        default: []
    },

    financials: {
        totalCost: Number,
        trainerPayment: Number,
        platformMargin: Number
    }

}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});


eventSchema.index({ eventDateTime: 1 });
eventSchema.index({ status: 1 });
eventSchema.index({ city: 1 });


eventSchema.virtual('isRescheduled').get(function () {
    return this.rescheduledDates.length > 0;
});



export const Event = mongoose.model('Event', eventSchema);