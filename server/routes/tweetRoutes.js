const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');

router.post('/generate-tweet', tweetController.generateTweet);

module.exports = router;
