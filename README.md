# pizza-bot
Learn how to order 🍕 from Slack

## Exercise 6: Add Pizza Message Buttons
* Post a message asking what pizza the user wants. There should be two message buttons: one for cheese and one for pepperoni.
* When the user clicks a button, tell them which type of pizza you will order.
* Store the user-facing name (e.g., cheese) and a PizzaPi Item object on the conversation.
* Run `npm test` and fix all problems that you find.

## Resources

* [Botkit docs and source](https://github.com/howdyai/botkit)
* [Skellington docs and source](https://github.com/Skellington-Closet/skellington)
* [PizzaPI docs](http://riaevangelist.github.io/node-dominos-pizza-api/)
* [PizzaPI source](https://github.com/RIAEvangelist/node-dominos-pizza-api)
* [Slack Message Buttons](https://api.slack.com/docs/message-buttons)

## Concepts

### Message Buttons

You can construct message buttons by passing a configuration object with an attachments array. You can pass this object to any Botkit method that will post a message (things like `bot.reply` or `convo.askQuestion`). Here's an example of picking your favorite fruit:

```js
{
 attachments: [{
    title: 'What kind of fruit would you like?',
    callback_id: 'fruit_choice',
    attachment_type: 'default',
    actions: [{
      name: 'apple',
      text: 'Apple',
      value: 'A',
      style: 'primary',
      type: 'button'
    }, {
      name: 'orance',
      text: 'Orange',
      value: 'O',
      style: 'danger',
      type: 'button'
    }]
  }]
}
```

When a user clicks one of the buttons, Slack will send your app a message over HTTP:

* the `callback_id` you set when creating the message
* the `name` of the clicked button
* the corresponding `value` of that same clicked button

You can treat this like any other question in your conversation. The first argument is just a little more complicated. Botkit will take care of all the HTTP request routing for you, that will happen "behind the scenes". All you need to know is that when a user clicks one of your message buttons, the callback you passed to `addQuestion` will get called.

*Pssst... you can add emoji fo the `text` value of a button. In case you're into that sort of thing.*

## Helpful Hints

### Pizza Codes

If you were to dig into the Domino's menu, you would find an Item with a code of `S_PIZZA` and some addition options for toppings. If you dug further, you'd find that code for the cheese option is `C` and pepperoni is `P`. This will come in handy when building a `pizzapi.Item`.

Also, for some reason, the default `quantity` of an Item for an item is 0 ¯\_(ツ)_/¯ You might want more than zero pizzas.

### Text, Name, Value! Oh My!

Each message button needs `text`, `name`, and `value` properties. These all sound similar, but here's how they're different:

* `text`: The user-facing text of the button. This is what users will see in the Slack UI.
* `name`: Used in your button callback function to get the value that a user clicked (i.e., it helps you answer the question "What's the value of the 'pizza' button?").
* `value`: This is what you will use in your code.

In our example, we used the names `cheese` and `pepperoni` and the values `C` and `P`. That gave us access to both a "friendly name" and a programmatic code.

To be honest, the distinction between name and value isn't so useful when you're dealing with buttons, since every button name has exactly one value. However, Slack just released drop downs in messages (like an HTML `select` element), and in that case the name/value distinction is really helpful because the user is selecting one value from many. They are likely building this API in a future-proof way (which is smart!), and will continue to release new interaction types where the name-value distinction comes in handy. For now, this is just a weirdness of their API we'll need to deal with.

## Next Exercise

Oh boy! We're getting close! We have enough information to place an order. So run, don't walk, to the next exercise!

Next Exercise: https://github.com/SparkPost/pizza-bot/tree/07-confirm
