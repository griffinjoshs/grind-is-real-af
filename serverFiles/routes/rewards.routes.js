const express = require('express');
const router = express.Router();
const rewardsController = require('../controllers/rewards.controllers');

router.get('/', rewardsController.getRewards);

module.exports = router;
