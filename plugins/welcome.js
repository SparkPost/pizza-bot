module.exports = {
  init: (controller) => {
    controller.hears([/hello bot/], ['direct_message', 'ambient'], (bot, message) => {
      bot.reply(message, `Howdy! My name is <@${bot.identity.id}>, good to meet you <@${message.user}>.`)
    })
  },
  help: {
    command: 'welcome',
    text: `Say "hello bot" and I'll give ya a shout`
  }
}
