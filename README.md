# pizza-bot
Learn how to order 🍕 From Slack

## Exercise 6: Add Pizza Message Buttons
* Post a message asking what pizza the user wants. There should be two message buttons: one for cheese, one for pepperoni.
* When the user clicks a button tell them which type of pizza you will order.
* Store the user-facing name (e.g., cheese) and the product code on the conversation.
* Run `npm test` and fix all problems that you find.

## Resources

* [Botkit docs and source](https://github.com/howdyai/botkit)
* [Skellington docs and source](https://github.com/Skellington-Closet/skellington)
* [PizzaPI docs](http://riaevangelist.github.io/node-dominos-pizza-api/)
* [PizzaPI source](http://riaevangelist.github.io/node-dominos-pizza-api)

## Concepts

### Message Buttons



### Codes vs Names

When storing or displaying items, it's helpful to give them both a unique code (or ID) and a user-facing name. The code is some sort of unique identifier that you reference in your app, the name is what users will see. It's helpful to keep these separate because names may change (for example: if you need translation, or maybe someone wants to change "cheese" to "cheez" to see if you get more clicks). You may not think the name will ever change, but trust us, it will :smile:. By tracking code and name separately, you're free to change the name whenever you like and still reference the same thing.

## Helpful Hints

### Codes


## Next Exercise

Oh boy! We're getting close! We have enough information to place an order! So run, don't walk, to the next exercise!

Next Exercise: https://github.com/SparkPost/pizza-bot/tree/07-confirm
