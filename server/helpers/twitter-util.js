var Twitter = require('twitter');

var client = new Twitter({
  consumer_key:"mTubVZngz6uUg9a5SPhJ61PJ6",
  consumer_secret:"hdbsKdTN7z4JvBwwKm9e78GcIb7pgDv4fmnrayMgysxCORJmLt",
  access_token_key:"452037695-g1KazKreZOjSpEl0Z3z0OIaKTkzUog4XPmRRt4Lp",
  access_token_secret:"hSzCQMYfm36D5ohqoOFLkApygGTnBSWPJw7DkCpbnahfR"
});


module.exports = {

 Home: function (req, res, next) {
    client.get('statuses/user_timeline', "", function(error, tweets, response) {
      if (!error) {
        res.json(tweets)
      }
    });
 },
 Tweets:function(req,res,next){
  client.post('statuses/update', {status: req.body.keyword},  function(error, tweet, response) {
  if(error) throw error;
  res.json(tweet)
  console.log(tweet);
});
 }

}
