import Twitter from "twit";
import { Webhook } from "discord-webhook-node";

const config = require("config.json");

const wClient = new Webhook(config.webhook_url);
wClient.setAvatar(config.webhook_avatar);
wClient.setUsername(config.webhook_name);

const tClient = new Twitter({
    consumer_key: config.api_key,
    consumer_secret: config.api_secret,
    access_token: config.access_token,
    access_token_secret: config.acesss_secret,
});

tClient.get("account/verify_credentials", { skip_status: true })
    .catch(err => {
        console.log(`Unable to login due to the following error:\n${err}`)
    })
    .then(res => {
        console.log(`Logged in as '${res.data.name}'!`);
    });

let stream = tClient.stream("statuses/filter", { follow: config.user_id });

console.log(`Fetching tweets from id '${config.user_id}'.`);

stream.on("connected", () =>
    console.log("Successfully connected to Twitter!");
);

stream.on("tweet", twt => {
    if(twt.retweeted_status || twt.in_reply_to_status_id || twt.is_quote_status) return;

    let twitterLink = `https://twitter.com/${twt.user.screen_name}/status/${twt.id_str}`;
    wClient.send(`${config.webhook_message} ${twitterLink}`);
});
  
stream.on("disconnect", () =>
    console.log("Disconnected from twitter!");
);

stream.on("reconnect", () =>
    console.log("Reconnecting to Twitter!");
);

process.on("uncaughtException", err =>
    console.log(`Something (bad) happened: ${err}`);
);
