# pizza-bot
Order :pizza: From Slack

## Exercise 5: Convert your Bot to an App

OK... this exercise is going to be pretty straightforward code-wise, but a little more heavy on the concept side. You can always circle back to the ideas later

### Install ngrok

`npm install -g ngrok`

### Run ngrok

Open a new terminal window and enter this command:
```bash
ngrok http 3000
```

You will see the ngrok window. You should see two values for `Forwarding`, copy the `https` version and share it with Avi and Cole in Slack. They will use it to configure your app with Slack.

**NOTE**: Don't restart ngrok or you will get a new URL. If you do restart ngrok, just pass the new URL to Avi and Cole and they'll update your
app's configuration with Slack.


### Get Your Credentials and Update Your `.env` File

Avi and Cole will give you three things: a `CLIENT_ID`, a `CLIENT_SECRET`, and a activation URL.

Add the following to your `.env` file (remember: this is the file that holds your environment-specific variables, like API keys):

```bash
export PORT=3000
export CLIENT_ID=<CLIENT_ID>
export CLIENT_SECRET=<CLIENT_SECRET>
```

**NOTE**: Don't forget to stop your bot and type `source .env` to set the new environment variables in your terminal session.

### Update `index.js`

You'll need to update your Skellington configurations to use the new Client ID/Client Secret pair. Your config should look like this at the end:

```js
'use strict'

require('skellington')({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  port: process.env.PORT,
  scopes: ['bot'],
  plugins: [require('./plugins/welcome'), require('./plugins/order')],
  botkit: {
    interactive_replies: true,
    json_file_store: './db/'
  }
})
```

* Remove `slackToken`:
* Add `clientId: process.env.CLIENT_ID`: Your CLIENT_ID from Slack.
* Add `clientSecret: process.env.CLIENT_SECRET`: Your CLIENT_SECRET from Slack.
* Add `port: process.env.PORT`: The port your local server will listen on.
* Add `scopes: ['bot']`: These are the OAuth scopes your app will use.
* Add `bokit: {}`: These configs will be passed directly to the Botkit library.
* Add `bokit.interactive_replies: true`: This setting will let us use Slack message buttons in our app.
* Add `bokit.json_file_store: './db/'`: Botkit will store some things behind the scenes, this sets up a small JSON file store. Don't worry too much about what goes into it, we won't be using it that much for this project.

## Resources

* [Botkit docs and source](https://github.com/howdyai/botkit)
* [Skellington docs and source](https://github.com/Skellington-Closet/skellington)
* [PizzaPI docs](http://riaevangelist.github.io/node-dominos-pizza-api/)
* [PizzaPI source](https://github.com/madelinecameron/PizzaPI)


## Concepts

### Bots vs. Apps


### Local Tunneling

Don't worry too much about how this works, but tools like `ngrok` and `localtunnel` will let you access endpoints on your
local server from anywhere on the Internet. These tools will give you a URL

This is useful because Slack will need to send HTTP requests to the Slack App running on your machine.

In our experience, `ngrok` has been easier to work with than `localtunnel`, so we will be using that for the duration of the workshop.



### Botkit Storage



## Helpful Hints

### Making a Slack App

## Next Exercise

Alright! Detour over! Now back to our regularly scheduled program!

In the next exercise, we're going to use some message buttons to get an order together! Mmmm! I can almost taste that delicious "pizza"!

Next Exercise: https://github.com/SparkPost/pizza-bot/tree/06-message-buttons

