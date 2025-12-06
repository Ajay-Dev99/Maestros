const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const AppError = require('../utils/AppError');
const { validateRequiredFields, validateObjectId } = require('../utils/validator');
const Route = require('../models/Route');

exports.createRoute = asyncHandler(async (req, res) => {
    validateRequiredFields(req.body, ['name', 'path']);

    const existingRoute = await Route.findOne({ path: req.body.path });

    if (existingRoute) {
        throw new AppError('Route with this path already exists', 400, 'DUPLICATE_PATH');
    }

    const route = await Route.create(req.body);

    ApiResponse.created(res, route, 'Route created successfully');
});

exports.updateRoute = asyncHandler(async (req, res) => {
    validateObjectId(req.params.id, 'Route ID');

    const route = await Route.findById(req.params.id);

    if (!route) {
        throw new AppError('Route not found', 404, 'ROUTE_NOT_FOUND');
    }

    if (req.body.path && req.body.path !== route.path) {
        const duplicatePath = await Route.findOne({
            path: req.body.path,
            _id: { $ne: req.params.id }
        });

        if (duplicatePath) {
            throw new AppError('Route with this path already exists', 400, 'DUPLICATE_PATH');
        }
    }

    const updatedRoute = await Route.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );

    ApiResponse.success(res, updatedRoute, 'Route updated successfully');
});






