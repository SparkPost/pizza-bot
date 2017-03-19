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
}
