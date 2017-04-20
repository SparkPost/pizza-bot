# pizza-bot
Learn how to order 🍕 from Slack

## Exercise 4: Choose a Store
* After your bot lists all the stores near the user's address, ask them to pick a store by ID.
* Get the Store info using the `dominos` library.
* If that request fails, give the user an error message and ask for their store again. If the request succeeds, set the result that comes back from the `dominos` library as a variable on the conversation.
* Run `npm test` and fix all problems that you find.

## Resources

* [Botkit docs and source](https://github.com/howdyai/botkit)
* [Skellington docs and source](https://github.com/Skellington-Closet/skellington)
* [PizzaPI docs](http://riaevangelist.github.io/node-dominos-pizza-api/)
* [PizzaPI source](https://github.com/RIAEvangelist/node-dominos-pizza-api)

## Concepts

### Docs Aren't (Always) the Truth

Uh-oh... the [docs](http://riaevangelist.github.io/node-dominos-pizza-api/) say this is how you should get Store info:

```js
const myStore = new pizzapi.Store()
myStore.ID = userChoseId

myStore.getInfo((storeData) => console.log(storeData))
```

It turns out that throws this error:

```bash
/Users/cfurfarostrode/src/projects/pizza-bot/node_modules/dominos/src/Store.js:7
    this.ID = parameters.ID;
                        ^
```

If you do this the error goes away:

```js
const myStore = new pizzapi.Store({ID: userChoseId})
```

How did we figure that out? I looked at the source code :scream_cat:. This is the great thing
about open source software: you can always go read the source. Docs are great, and you should always start there. But once they stop making sense or seem to contradict what you see, take a peek at the code. Code is always the source of truth.

So how do you find the source? You can look locally at your `node_modules` directory and find the `domninos` directory.
The error message tells us the file path and even the line number of the error. If you open `Store.js`, you'll see lines 6-8 look like this:

```js
var Store = function(parameters) {
    this.ID = parameters.ID;
};
```

It turns out `parameters` is required, and it looks like it must be an object with one (optional) key `ID`.

You could also look the source up on [Github](https://github.com/madelinecameron/PizzaPI/blob/master/src/Store.js#L7). Using your local copy is nice mainly because that is the version you are using, so you can be sure that is the code that will be run.

In short, docs are good, but learn how to read source code. That's always going to be your, ahem, *source* of truth.


## Helpful Hints

Use the `action` property of `conversation.addMessage` to jump to another thread:

```js
conversation.addMessage({
  text: `some text`,
  action: `next_thread`
})
```

In the examples, we're making a method for each set of conversation interactions. These methods have names like `setUpAddressConvo` and `setUpStoresConvo`. That helps keep our interactions grouped together and keep things organized (if you remember that from the first exercise, give yourself a :star2:!).

## Next Exercise

Woohoo! We now have a bot that can ask for an address, find a "restaurant", and let the user pick where they want "pizza" from!
And we learned a valuable lesson about the pitfalls of documentation.

In the next exercise, we're going to take a break from coding to think about user experience. Then we'll get back on board the pizza train.

Next Exercise: https://github.com/SparkPost/pizza-bot/tree/05-slack-app

