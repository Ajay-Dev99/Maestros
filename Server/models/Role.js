const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Role name is required'],
            unique: true,
            trim: true,
            lowercase: true,
            maxlength: [50, 'Role name cannot exceed 50 characters']
        },
        displayName: {
            type: String,
            required: [true, 'Display name is required'],
            trim: true,
            maxlength: [100, 'Display name cannot exceed 100 characters']
        },

        permissions: [{
            type: Schema.Types.ObjectId,
            ref: 'Route'
        }],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;

