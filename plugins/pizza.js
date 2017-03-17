const pizzapi = require('pizzapi')
const logger = require('skellington-logger')('pizza')

module.exports = {
  init: (controller) => {
    controller.hears([/I want a pizza/i], ['direct_message', 'direct_mention'], getAPizza)
  },
  help: {
    command: 'pizza',
    text: `Say "I want a pizza" and I'll help you find something like that near you`
  }
}

/**
 * A controller callback to look for Pizza stores from a fixed address
 * @param bot
 * @param message
 */
function getAPizza (bot, message) {
  bot.reply(message, 'Here are some nearby pizza stores for you...')
  getStores((err, stores) => {
    if (err) {
      return bot.reply(message, `Oops! Something happened and I couldn't find any pizza stores. Sorry about that! Give me a minute to recover and try again.`)
    }

    bot.reply(message, stores.join('\r\n'))
  })
}

/**
 * Gets all stores and formats them in an array of pretty Strings, one entry per store.
 * @param cb A Node-style callback
 */
function getStores (cb) {
  pizzapi.Util.findNearbyStores('11 Times Square, New York, NY 10036', 'Delivery', (storeData) => {
    if (!storeData.success) {
      logger.error(`Error getting stores: ${storeData.message}`)
      return cb(new Error(storeData.message))
    }

    const formattedStores = storeData.result.Stores
      .filter((store) => store.IsOpen && store.IsOnlineCapable && store.IsOnlineNow)
      .map((store) => `${store.StoreID}: ${getStoreAddress(store)}`)
      .sort()

    cb(null, formattedStores)
  })
}

/**
 * Formats the store address and makes it easier to read
 * @param store
 * @returns {string}
 */
function getStoreAddress (store) {
  return store.AddressDescription
    .replace(/\n/g, ' ')
    .replace(/ID IS REQUIRED FOR ALL CREDIT CARD(S)? ORDERS./, '')
}
