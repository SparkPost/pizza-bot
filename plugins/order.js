const pizzapi = require('dominos')

module.exports = {
  init: (controller) => {
    controller.hears([/I want a pizza/], ['direct_message', 'direct_mention'], (bot, message) => {
      pizzapi.Util.findNearbyStores('11 Times Square, New York, NY 10036', 'Delivery', (storeData) => {
          const response = storeData.result.Stores
            .filter(el => el.IsOpen && el.IsOnlineCapable && el.IsOnlineNow)
            .sort((a, b) => a.StoreID - b.StoreID)
            .map(el => `${el.StoreID}: ${el.AddressDescription}`)
            .join('\r\n')
          bot.reply(message, `Woof woof! Hello <@${message.user}>! This is the best day ever! I am finding nearby pizza places for you! Squirrel!\r\nYour options are\r\n ${response}`)
      })
    })
  },
  help: {
    command: 'welcome',
    text: `Say "hello bot" and I'll give ya a shout`
  }
}