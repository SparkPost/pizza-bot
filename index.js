'use strict'

require('skellington')({
  slackToken: process.env.SLACK_TOKEN,
  plugins: [require('./plugins/welcome'), require('./plugins/order')]
})
