const pizzapi = require(`pizzapi`)
const logger = require(`skellington-logger`)(`order`)

module.exports = {
  init: (controller) => {
    controller.hears([/I want a pizza/i], [`direct_message`, `direct_mention`], (bot, message) => bot.createConversation(message, startPizzaConvo))
  },
  help: {
    command: `pizza`,
    text: `Say "I want a pizza" and I'll help you find something like that near you`
  }
}

/**
 * Sets up and starts a conversation with the user to get enough info to order a pizza
 * @param err
 * @param convo
 */
function startPizzaConvo (err, convo) {
  if (err) {
    logger.error(`This error can never actually happen lol`, err)
  }

  setUpAddressConvo(convo)
  setUpStoresConvo(convo)
  setUpMenuConvo(convo)

  convo.activate()
  convo.gotoThread(`address`)
}

/**
 * Sets up the conversation to get a users address. For sanity, we`re going to break up parts of the conversation into different functions.
 * Maybe later, they could go into different files.
 * @param convo
 */
function setUpAddressConvo (convo) {
  convo.addMessage({
    text: `Oops! Something happened and I couldn't find any pizza stores. Sorry about that! Give me a minute to recover and try again.`,
    action: `address`
  }, `address_error`)

  convo.addMessage(`Oh dear, I couldn't find any stores near you.`, `no_stores`)

  convo.addQuestion(`Where do you want your pizza delivered?`, (addressResponse) => {
    const address = addressResponse.text

    getStores(address, (err, stores) => {
      if (err) {
        convo.gotoThread(`address_error`)
        return
      }

      if (stores.length === 0) {
        convo.gotoThread(`no_stores`)
        return
      }

      convo.setVar(`address`, address)
      convo.setVar(`stores`, stores)

      convo.gotoThread(`list-stores`)
    })
  }, {}, `address`)
}

/**
 * Conversation messages relating to printing and choosing stores
 * @param convo
 */
function setUpStoresConvo(convo) {
  convo.addMessage({
    text: `Here are some nearby pizza stores for you... {{#vars.stores}}\r\n{{.}} {{/vars.stores}}`,
    action: `pick-store`
  }, `list-stores`)

  convo.addMessage({
    text: `I couldn't find a store with ID {{ vars.storeId }}. Double check that ID with the list above.`,
    action: `pick-store`
  }, `store-dne`)

  convo.addQuestion(`Which store ID would you like to order from?`, (response) => {
    const storeId = parseInt(response.text, 10)
    convo.setVar(`storeId`, storeId)

    const myStore = new pizzapi.Store({ID: storeId});

    myStore.getInfo((storeData) => {
      if (!storeData.success) {
        convo.gotoThread(`store-dne`)
        return
      }

      convo.setVar(storeData.result)
      convo.gotoThread(`list-menu`)
    });
  }, {}, `pick-store`)
}

/**
 * All menu interactions go here
 * @param convo
 */
function setUpMenuConvo(convo) {
  convo.addMessage(`Here's what they have to offer:`, `list-menu`)
}

/**
 * Gets all stores and formats them in an array of pretty Strings, one entry per store.
 * @param cb A Node-style callback
 */
function getStores (address, cb) {
  pizzapi.Util.findNearbyStores(address, `Delivery`, (storeData) => {
    if (!storeData.success) {
      logger.error(`Error getting stores: ${storeData.message}`)
      return cb(new Error(storeData.message))
    }

    const formattedStores = storeData.result.Stores
      .filter((store) => store.IsOpen && store.IsOnlineCapable && store.IsOnlineNow)
      .map((store) => `${store.StoreID}: ${getStoreAddress(store)}`)
      .sort()

    logger.info(`found ${formattedStores.length} stores`)

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
    .replace(/\n/g, ` `)
    .replace(/ID IS REQUIRED FOR ALL CREDIT CARD(S)? ORDERS./, ``)
}
