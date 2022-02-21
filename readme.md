# Twitter -> Discord Webhook
Simple (enough) to configure into a discord webhook. Runs on Node.js

## Setup
(Provided you already have node.js installed otherwise install it [here](https://nodejs.org/en/))

Clone this project then configure in *config/config.json* then run to install all dependencies
```
npm install
```
Finally run this command to run the tool
```
node main.js
```

## Config
```json
{
    "webhook_url": "",
    "webhook_name": "",
    "webhook_avatar": "",
    "webhook_message": "",
    "api_key": "",
    "api_secret": "",
    "access_token": "",
    "acesss_secret": "",
    "user_id": ""
}
```

* **Webhook_url**: The discord webhook url, for more information check out [this](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) page.
* **Webhook_name**: The name of your webhook
* **Webhook_avatar**: The avatar of your webhook
* **Webhook_message**: The message before your Twitter link
* **api_key**: Twitter API key, if you do not have a Twitter developer account then check out [this](https://developer.twitter.com/en) page
* **api_secret**: Twitter API secret, requires Twitter developer account
* **access_token**: Twitter account access token, requires Twitter developer account
* **access_secret**: Twitter account acesss secret, requires Twitter developer account
* **user_id**: the user id for the Twitter account you want notifications from, to find a Twitter id use [this](https://tweeterid.com/) tool

---
*this took too long for what it is lol*



