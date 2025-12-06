const express = require('express');
const router = express.Router();
const routeController = require('../controllers/route.controller');



router.post('/', routeController.createRoute);
router.put('/:id', routeController.updateRoute);
module.exports = router;
