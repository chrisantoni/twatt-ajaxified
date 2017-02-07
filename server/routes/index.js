var express = require('express');
var router = express.Router();
var twitterController = require("../helpers/twitter-util")


router.get('/home',twitterController.Home)
router.post('/home/tweets',twitterController.Tweets)

module.exports = router;
