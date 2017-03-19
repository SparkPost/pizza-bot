# pizza-bot
Order :pizza: From Slack

## Exercise 4: Choose a Store
* After your bot lists all the stores near the user's address, ask them to pick a store by ID.
* Get the Store info from the `pizzapi`. 
* If that request fails, give the user an error message and ask for their store again.
If the request succeeds, set the result that comes back from the `pizzapi` library as a variable on the conversation.

## Resources

* [Botkit docs and source](https://github.com/howdyai/botkit)
* [Skellington docs and source](https://github.com/Skellington-Closet/skellington)
* [PizzaPI docs](http://riaevangelist.github.io/node-dominos-pizza-api/)
* [PizzaPI source](https://github.com/madelinecameron/PizzaPI)

## Concepts

### Docs Aren't the Truth

Uh-oh... the [docs](http://riaevangelist.github.io/node-dominos-pizza-api/) say this is how you should get Store info:

```js
const myStore = new pizzapi.Store()
myStore.ID = userChoseId

myStore.getInfo((storeData) => console.log(storeData))
```

It turns out that throws this error:
```bash
/Users/cfurfarostrode/src/projects/pizza-bot/node_modules/pizzapi/src/Store.js:7
    this.ID = parameters.ID;
                        ^
```

If you do this the error goes away:
```js
const myStore = new pizzapi.Store({ID: userChoseId})
```

How did we figure that out? I looked at the source code :scream_cat:. This is the great thing
about open source software: you can always go read the source. Docs are great, but even for (especially for?) paid, closed-sourced
software, the docs can be wrong. Docs are great, and you should always start there. But once they stop making sense or seem
to contradict what you see, take a peek at the code. Code is always the source of truth.

So how do you find the source? You can look locally at your `node_modules` directory and find the `pizzapi` directory.
We looked around in there until we found a file named `Store.js`, which, surprise surpise, had the constructor for the Store object.
It looks like this:

```js
var Store = function(parameters) {
    this.ID = parameters.ID;
};
```

It turns out `parameters` is required, and it looks like it must be an object with one (optional) key `ID`.

You could also look this up on Github. Using your local copy is nice mainly because that is the version you are using,
so you can be sure that is the code that will be run.

In short, docs are good, but learn how to read source code. That's always going to be your, ahem, *source* of truth.


## Helpful Hints

Use the `action` property of `conversation.addMessage` to jump to another thread:

```js
conversation.addMessage({
  text: `some text`,
  action: `next_thread`
})
```

In the examples, we're making a method for each set of conversation interactions. These methods
have names like `setUpAddressConvo` and `setUpStoresConvo`. That helps keep our interactions grouped
together and keep things organized (if you remember that from the first exercise, give yourself a :star2:!).

## Next Exercise

Woohoo! We have a bot that can ask for an address, find a "restaurant", and let the user pick where they want pizza from!
And we learned a valuable lesson about the pitfalls of documentation.

In the next exercise, we're going to go one step further and take a look at the menu! Mmmm! I can almost taste that delicious "pizza"!

Next Exercise: https://github.com/SparkPost/pizza-bot/tree/05-menu

