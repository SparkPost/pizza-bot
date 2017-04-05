'use strict'

require('skellington')({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  port: process.env.PORT,
  scopes: ['bot'],
  plugins: [require('./plugins/welcome'), require('./plugins/order')],
  botkit: {
    interactive_replies: true,
    json_file_store: './db/'
  }
})
