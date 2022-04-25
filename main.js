const Twitter = require(`twit`)
const Webhook = require(`discord-webhook-node`)
const config = require(`./config/config.json`)

const wClient = new Webhook.Webhook(`${config.webhook_url}`)
wClient.setAvatar(`${config.webhook_avatar}`)
wClient.setUsername(`${config.webhook_name}`)

const tClient = new Twitter({
    consumer_key: `${config.api_key}`,
    consumer_secret: `${config.api_secret}`,
    access_token: `${config.access_token}`,
    access_token_secret: `${config.acesss_secret}`
})

tClient.get('account/verify_credentials', { skip_status: true })
.catch(function (err) {
  console.log(`Unable to login due to: ${err}`)
})
.then(function (result) {
  console.log(`Logged in as: ${result.data.name}`);
})

var stream = tClient.stream('statuses/filter', { follow: `${config.user_id}` })
console.log(`Fetching tweets from id: ${config.user_id}`)

stream.on('connected', function (response) {
  console.log(`Connected to twitter`)
})

stream.on('tweet', function (tweet) {
  if(tweet.retweeted_status || tweet.in_reply_to_status_id || tweet.is_quote_status) return
    let twitterLink = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    wClient.send(`${config.webhook_message} ${twitterLink}`)
  })
  
stream.on('disconnect', function (disconnectMessage) {
  console.log(`Disconnected from twitter`)
})

stream.on('reconnect', function (request, response, connectInterval) {
    console.log(`reconnecting to twitter`)
})

process.on('uncaughtException', function (err) {
      console.log("something happened!", err);
});