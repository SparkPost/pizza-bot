'use strict'
require('dotenv').config()
require('skellington')({
  slackToken: process.env.SLACK_TOKEN,
  plugins: [require('./plugins/welcome')]
})
