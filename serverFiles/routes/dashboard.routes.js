const express = require('express');
const dashboardController = require('../controllers/dashboard.controllers');

const router = express.Router();

router.get('/day/:date', dashboardController.getDay);
router.get('/week/:weekYear', dashboardController.getWeek);
router.get('/month/:monthYear', dashboardController.getMonth);
router.get('/year/:year', dashboardController.getYear);
router.get('/day/', dashboardController.redirectToDay);
router.get('/week/', dashboardController.redirectToWeek);
router.get('/month/', dashboardController.redirectToMonth);
router.get('/year/', dashboardController.redirectToYear);

module.exports = router;


