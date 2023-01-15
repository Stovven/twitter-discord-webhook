# Twitter -> Discord Webhook
Simple (enough) to configure Twitter -> Discord webhook. Runs on Node.js

## Setup

### Clone This Project & Cd Into It
> You will need `git` installed to do this!

```sh
git clone https://github.com/Stovven/discord-twitter-webhook
cd discord-twitter-webhook
```

### Configure
Edit the `config.json` with the given information below:

* `webhook_url`: The Discord webhook url, for more information check out [this](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) page.
* `webhook_name`: The username of your Discord webhook.
* `webhook_avatar`: The avatar of your Discord webhook.
* `webhook_message`: The message before your Twitter link. Formatted as `{message} {tweet_link}`, no newline added.
* `api_key`: The Twitter API key, if you do not have a Twitter developer account then check out [this](https://developer.twitter.com/en) page.
* `api_secret`: The Twitter API secret, requires a Twitter developer account.
* `access_token`: The Twitter account access token, requires a Twitter developer account.
* `access_secret`: The Twitter account acesss secret, requires a Twitter developer account.
* `user_id`: The user ID for the Twitter account you want notifications from, to find a Twitter id use [this](https://tweeterid.com/) tool.

### Install Dependencies
> You will need Node.js installed to do this and the next section! If you don't have it installed, you can install it from [here](https://nodejs.org/en/).

```sh
npm install
```

### Run

```sh
node main.js
```

---
*this took too long for what it is lol*
