const express = require('express');
const router = express.Router();
const challengesController = require('../controllers/challenges.controllers');

router.get('/', challengesController.getChallenges);

module.exports = router;
