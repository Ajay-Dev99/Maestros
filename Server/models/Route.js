const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const routeSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Route name is required'],
            trim: true,
            maxlength: [50, 'Route name cannot exceed 50 characters']
        },
        path: {
            type: String,
            required: [true, 'Route path is required'],
            trim: true,
            lowercase: true
        },
        icon: {
            type: String,
            default: 'circle',
            trim: true
        },

        isActive: {
            type: Boolean,
            default: true
        },
        isVisible: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

routeSchema.index({ path: 1 });
routeSchema.index({ name: 1 });
routeSchema.index({ isActive: 1, isVisible: 1 });


const Route = mongoose.model('Route', routeSchema);

module.exports = Route;

