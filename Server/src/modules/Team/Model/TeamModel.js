const mongoose = require('mongoose');

export const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    members: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: true
    }
})

export const Team = mongoose.model('Team', teamSchema);