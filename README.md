# pizza-bot
Order :pizza: From Slack

## Exercise 8: Next Steps

This one is up to you!

## Where Can You Go From Here?

### Error Handling

We didn't do much error handling in this project. What happens if the order fails? Or if someone types only their Zip code for an address? These are the types of things you'll need to add to a final product.

### Order More than 1 Pizza

Ordering only one pizza isn't going to work if you have friends over. Think about how you could order more than one, maybe even several pizzas of different types.

### Add Different Types of Orders

Just cheese and pepperoni? What about sausage? Or pineapple? Or different crusts? Or maybe some sides. Investigate the menu and find some things you think you or your friends would want. You might take a look at Slack's [message menus](https://api.slack.com/docs/message-menus).

### Ask for a Credit Card

Like we mentioned in the last exercise, you can't really order anything without a credit card. Find a (private) way to get your users credit card information. Remember, if you want to release this to the wider world you'll need to worry about PCI compliance (you probably don't want to deal with that).

### Track Orders

Since we gave users their order ID, we can use that to track their order. Add a new plugin with some interactions for tracking so you'll know where your pizza is!

### Set Up Hosting

You can't run this bot off your laptop forever. Set up deployments to Heroku or another service. Heroku is great because you can run a bot for free and you can set up automatic deployments whenever you push to master. It's like magic when you merge a commit and it shows up in your production bot!

### Start Something Totally New

Start a totally new bot! Need some ideas? Take a look at this repo of open, public APIs you could have your bot interact with: https://github.com/toddmotto/public-apis

## Resources

* [Botkit docs and source](https://github.com/howdyai/botkit)
* [Skellington docs and source](https://github.com/Skellington-Closet/skellington)
* [PizzaPI docs](http://riaevangelist.github.io/node-dominos-pizza-api/)
* [PizzaPI source](https://github.com/RIAEvangelist/node-dominos-pizza-api)
* [Slack Message Buttons](https://api.slack.com/docs/message-buttons)
* [Slack Message Menus](https://api.slack.com/docs/message-menus)
* [Public APIs](https://github.com/toddmotto/public-apis)

## Concepts

### Keep Iterating

Get something out there, then keep making it better. We recommend creating a series of Github issues on your repo to track all your ideas. When you get some free time, make a branch and see if you can make progress. 

## Helpful Hints

### Small Changes 

Whatever you do next, remember to think through your project (or at least the first part of your project) and define several small steps you could make towards your final goal. It's ok if you don't know how to get from start to finish right away, you will learn more about your project as you go.

If you use Github issues, try to keep to one issue per branch. That will keep you change sets small and easy to understand and will prevent weird order dependencies from cropping up ("Oh wait.. branch-a depends on some stuff on branch-b. I finished all the stuff I wanted in branch-b, but now I started this other thing and it will take a week! Now I can't do anything with branch-a, and I can't start branch-c until that's done....").

## Next Exercise

At this point, it's a choose your own adventure! You now have the tools to build a Slack bot from scratch. Let us know on Twitter what you came up with. You can find us [@colestrode](https://twitter.com/colestrode), [@avrahamgoldman](https://twitter.com/avrahamgoldman), or [@sparkpost](https://twitter.com/sparkpost). Thanks for joining us and keep up the awesome work!

