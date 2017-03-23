# pizza-bot
Order :pizza: From Slack

## Exercise 3: Get a Real Address
* When your bot hears "I want a pizza" aske the user the which address they want their pizza delivered to
* Print any nearby restaurants. This involves asking the user a question and waiting for a response. We call these long running interactions "conversations".
* Store the address you get from the user and your list of stores in the conversation state. (See the section below about Variables in Conversations).
* Run `npm test` and fix all problems that you find.

## Resources

* [Botkit docs and source](https://github.com/howdyai/botkit)
* [Skellington docs and source](https://github.com/Skellington-Closet/skellington)
* [PizzaPI docs](http://riaevangelist.github.io/node-dominos-pizza-api/)
* [PizzaPI source](https://github.com/madelinecameron/PizzaPI)

## Concepts

### Conversations

This task requires some back and forth with the user. We need to ask them questions and respond to their answers. 
We can do this with [conversations](https://github.com/howdyai/botkit#control-conversation-flow).

### Creating a Conversation

To start a conversation, you will need to call `bot.createConversation(message, cb)`. `cb` is a Node-style callback
that takes an error as the first parameter and a `conversation` object as the second parameter. Fun fact: this method is 
synchronous and cannot respond with an error!

There are a few methods you'll want to use:

* [convo.addMessage(textOrObject, thread_name)](https://github.com/howdyai/botkit#convoaddmessage)
* [convo.addQuestion(text, callback, options, thread_name)](https://github.com/howdyai/botkit#convoaddquestion)
* [convo.setVar(key, value)](https://github.com/howdyai/botkit#convosetvar)
* [convo.gotoThread(thread_name)](https://github.com/howdyai/botkit#convogotothread)
* [convo.activate()](https://github.com/howdyai/botkit#conversationactivate)


Your flow will go something like this:
```js
controller.hears(/i want a pizza/i, ['ambient'], (bot, message) => bot.createConversation(message, setUpConvo))

function setUpConvo(err, convo) {
  
  convo.addMessage('some text', 'thread_1')
  convo.addQuestion('a question', (responseObj) => { ... convo.gotoThread('thread_3') }, {}, 'thread_2')
  convo.addMessage('another message', 'thread_3')
  
  convo.activate()
  convo.gotoThread('thread_1')
}

```

The conversation will automatically end when you have no more messages queued up in your flow.

### Conversation Flow

Each message and question is associated with a "thread." You can think of a thread as one interaction in your conversation.
We use threads to keep our conversation callbacks flat (no [pyramid of doom!](http://callbackhell.com/)). You can also repeat/reuse parts of your conversations
the same path very easily with threads. This is very handy for error handling.

You can use `convo.gotoThread` to jump to different different threads. This will come in handy in `convo.addQuestion`.

`convo.addMessage` doesn't take a callback, so to move to another thread, you will need to specify an "action" like so:

```js
convo.addMessage({
  text: 'This is the message text for the user',
  action: 'next_thread'
}, 'this_thread')
```

### Variables in Conversations

You can set variables on a conversation and retrieve them later. Use the `conversation.setVar(key, value)` method to set variables.
You can access the values programmatically with `conversation.vars.key`. If you need access those values inside a 
conversation response, you can use [mustache syntax](https://github.com/janl/mustache.js/#templates). The `conversation.vars` 
will be exposed as `vars` in the template: `Here is your address: {{ vars.address }}`.

**HINT:** You should set the `address` the user types in and any `stores` you find as variables on your conversation.


## Helpful Hints

Reuse everything you can from the last exercise. For instance: keep those methods to get stores and format addresses. They'll come in handy!

### Looping Over Arrays In Messages With Mustache

Let's say you have an array of store addresses and you added that as a variable named `stores` to your conversation. 
To print each store address on it's own line, you could do something like this:

```js
  convo.addMessage(`Here are some nearby pizza stores: {{#vars.stores}}\r\n{{.}} {{/vars.stores}}`, `list-stores`)
```

`{{#vars.stores}} ... {{/vars.stores}}` is mustache syntax to iterate over each entry in the `stores` array.
That `\r\n` will be interpreted by Slack as a new line character
`{{.}}` is mustache syntax to print the current entry in the `stores` array. This works if `stores` is an array of Strings.
If we had an array of objects, you could use the property name in the mustache template, something like `{{address}}`.


## Next Exercise

Great Job! You now can start a conversation with a user, ask a them a question, and respond based on what they say. 
You can even store information for later. These are all super important concepts in bot-building! 
Now things are going to get interesting!

Next Exercise: https://github.com/SparkPost/pizza-bot/tree/04-store

