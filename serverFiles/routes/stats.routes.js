const express = require('express');
const router = express.Router();
const statsController = require('../controllers/stats.controllers');

router.get('/', statsController.getStats);

module.exports = router;