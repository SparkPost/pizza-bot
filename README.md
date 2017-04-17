# pizza-bot
Learn how to order :pizza: From Slack

## Exercise 1: Add a New Plugin

* Add a new plugin to the plugins directory named `order.js`.
* Have the plugin listen to `direct_message` and `direct_mention` events for the phrase "I want a pizza". 
* The plugin should respond telling the user it is looking for nearby stores (you don't have to find them yet, we'll do that next).
* The plugin should have some help text.
* Run `npm test` and fix all problems that you find.

## Resources

* [Botkit docs and source](https://github.com/howdyai/botkit)
* [Skellington docs and source](https://github.com/Skellington-Closet/skellington)

## Concepts

### Skellington Plugins

Plugins are a core concept of [Skellington](https://github.com/Skellington-Closet/skellington). Plugins group related 
interactions (like everything you need to order a pizza). Each plugin can specify its own help text. Type 
`@<botname> help` into Slack to see how the help text is used.

Plugins help keep your code organized and clean. Organized and clean code is a favor to your future self.

### controller.hears

This interface comes from [Botkit](https://github.com/howdyai/botkit). `controller.hears` lets you specify an array of 
[regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that should match
the user input, event types, and a callback function to handle the message from the user.
 
There are 4 event types:
 * direct_message: Fired when you direct message a bot.
 * direct_mention: Fired when your message begins with `@<botname>` in any channel the bot is in, other than direct messages.
 * mention: Fired when your message contains `@<botname>` anywhere but the first word. Works in all channels the bot is in, other than direct messages.
 * ambient: Fired for all messages in any channel the bot is in, other than direct messages.
 
The callback function takes a `bot` and `message` object. The `bot` is a reference to the bot that heard the message, and the
message provides some details about which user said what text in which channel. You can `console.log` out the messages to see 
what they contain.

### Code Linting

When you run `npm test`, you are running the [standard](https://github.com/feross/standard) code-linting utility on your project. Linting means checking your code for style and consistency. Standard uses eslint under the hood and can do some nifty things, like fix common errors.

Enforcing a common style helps in a few ways:
* it makes the codebase easier to read because it is consistent
* it protects against common errors (using undeclared variables, for example)
* it prevents arguments about style (seriously... save your energy 😊 )

The important thing is consitency: you don't have to agree with the style, but it is important to be consistent with the style in a project. That is a kindness to everyone who works on the project (and your future self!).

You might notice that all of your semi-colons are gone. [That's okay!](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding). 

## Helpful Hints

Take a look at `plugins/welcome.js` for an example of setting up a plugin.

Don't forget to require your new plugin in `index.js` and add it to the `plugins` array.

Use `npm test` to check your code for style consistency.

Use `bot.reply(message, 'Your reply')` inside your `controller.hears` callback to respond. `Your reply` will appear in Slack.

If you want to test your regular expression, type `node` in your terminal. That will open the Node "REPL", an interactive terminal
that lets you run javascript code. You can do something like:
```js
var regex = /my regex/
regex.test('my string')
```

If that `regex.test` command prints out `true`, your regex matches.

## Next Exercise

Great job! You've made your first Skellington plugin. Plugins are a great way to isolate related bot interactions.

This one isn't so useful yet, but we'll start improving this plugin in the next exercise.

Next exercise: https://github.com/SparkPost/pizza-bot/tree/02-stores
