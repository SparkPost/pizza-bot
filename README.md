# pizza-bot
Learn how to order :pizza: from Slack

## Exercise 5: Convert your Bot to an App

This exercise is going to be pretty straightforward code-wise, but a little more heavy on the concept side. You can always circle back to the ideas later if you need to.

Here's the gist: the Domino's menu is complicated and there's not much documentation on how we can use all the options it provides. So we're going to simplify the problem: we're going to give users an option of one of two pizzas, either cheese or pepperoni.

Why not try to figure out the menu now? We are building what's called an **MVP**, a Minimum Viable Product. We want our users to order a pizza and this approach of "hard-coding" their options accomplishes that. We can always come back and make our bot smarter and find clever ways to display the menu. But for now that would send us down a rabbit hole of investigation without a clear end in sight. 

*Sometimes it's better to keep your momentum up and solve hard problems later.*

Always look for ways to "side-step" the current problem with a simpler solution.

### The Approach

Slack offers something called "message buttons", basically buttons attached to your message that users can click. Buttons are great when you have a few options you want users to choose from. 

Button clicks cause Slack to send an HTTP request to your bot, which then triggers an action based on which button was clicked. The single team bot we've built can't receive HTTP requests, only Slack Apps can do that (see below for the differences). So we're going to convert our single-team bot to a Slack App. Lucky for you, Skellington takes care of a lot of the hard work for you! All you'll need to do is add  configs.

## The Steps

### Install ngrok

`npm install -g ngrok`

`ngrok` creates an HTTP "proxy": it gives you a random URL and all HTTP requests to that URL will be funnelled to the bot running on your machine. Don't worry too much about how it works; it's okay to let things be magical in the beginning.

### Run ngrok

Open a new terminal window and enter this command:
```bash
ngrok http 3000
```

You will see the ngrok window. You should see two values for `Forwarding`. Copy the `https` version and share it with Avi and Cole in Slack. They will use it to configure your app with Slack.

**NOTE**: Don't restart ngrok or you will get a new URL. If you do accidentally restart ngrok, just pass the new URL to Avi and Cole and they'll update your app's configuration with Slack.


### Get Your Credentials and Update Your `.env` File

Avi and Cole will give you three things: a `CLIENT_ID`, a `CLIENT_SECRET`, and a activation URL.

Add the following to your `.env` file (remember: this is the file that holds your environment-specific variables, like API keys):

```bash
export PORT=3000
export CLIENT_ID=<CLIENT_ID>
export CLIENT_SECRET=<CLIENT_SECRET>
```

**NOTE**: Don't forget to stop your bot by typing `cmd + c` and type `source .env` to set the new environment variables in your terminal session.

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
* Add `scopes: ['bot']`: These are the OAuth scopes your app will use (don't worry too much about that).
* Add `bokit: {}`: These configs will be passed directly to the Botkit library.
* Add `bokit.interactive_replies: true`: This setting will let us use Slack message buttons in our app.
* Add `bokit.json_file_store: './db/'`: Botkit will store some things behind the scenes, this sets up a small JSON file store. Don't worry too much about what goes into it, we won't be using it that much for this project.

## Resources

* [Botkit docs and source](https://github.com/howdyai/botkit)
* [Skellington docs and source](https://github.com/Skellington-Closet/skellington)
* [PizzaPI docs](http://riaevangelist.github.io/node-dominos-pizza-api/)
* [PizzaPI source](https://github.com/RIAEvangelist/node-dominos-pizza-api)


## Concepts

### Bots vs. Apps

There are (broadly) two types of integrations you can write for Slack: single-team bots and Slack Apps. 

A single-team bot takes a Slack token and can listen to events over a websocket (e.g. new messages or when a user joins a channel) and respond with HTTP API calls (e.g., post a message or add an emoji reaction). Single-team bots are restricted to just a single team (shocker) and are limited in the Slack APIs they can interact with (there are several). They cannot receive incoming HTTP requests from Slack (like we will get for message buttons) or respond to events from multiple teams.

A Slack App is like a super-charged single-team bot. It is more complicated to configure and set up than a single-team bot. To configure a Slack App, you need a Client ID and Client Secret. It also requires a webserver listening on a port for HTTP requests. One app can interact with multiple teams and has full access to all the Slack APIs. Slack Apps can have a bot user just like a single-team bot, and while they don't have to, they usually do.

Skellington handles most of the complicated setup of a Slack App, all you need is some different configuration options.

### Local Tunneling

Don't worry too much about how this works, but tools like `ngrok` and `localtunnel` will let you access endpoints on your local server from anywhere on the Internet by creating an HTTP Proxy. These tools will give you a URL, and all HTTP requests to that URL will be routed to your machine. It's like magic (and that's ok!).

This is useful because Slack will need to send HTTP requests to the Slack App running on your machine.

In our experience, `ngrok` has been easier to work with than `localtunnel`, so we will be using that for the duration of the workshop.

### Minimum Viable Product

This is the smallest version of your app that meets your users needs. By building a small version of your app that is still useful to your users, you can focus on something you can finish and ship to your users.

*You can have the best, most awesome, groundbreaking app, but if nobody can use it because it's "not done yet", you don't actually have anything.*

It's always important to remember "[shipping is a feature](https://www.joelonsoftware.com/2009/09/23/the-duct-tape-programmer/)" -- maybe the most important feature.

## Helpful Hints

Make sure your `json_file_store` path is `./db/`, otherwise your app may restart unexpectedly (checkout the `start` script in `package.json` to see if you can figure out why).

## Next Exercise

Alright! Detour over! Now back to our regularly scheduled program.

In the next exercise, we're going to use some message buttons to get an order together! Mmmm... I can almost taste that delicious "pizza"!

Next Exercise: https://github.com/SparkPost/pizza-bot/tree/06-message-buttons

