# pizza-bot
Learn how to order :pizza: from Slack

## Welcome Pizza Botter

Howdy :wave: We're going to build a bot today. An awesome bot that will order you hot, delicious pizza. 
From Domino's. So, hot pizza. Well, maybe hot, but definitely at least warm pizza. From Domino's.
OK, let's not get hung up on the definitions of "pizza" or "food". The bot will be awesome, I promise. 

Whether or not you actually want to _eat_ Domino's "pizza", this project will show us how to take a fun idea (a Slack bot that delivers pizza), break it down into small and manageable steps, and work with real-life (sometimes messy) external libraries to make your idea become a real thing. 

Before we begin, let's do a little set up. 

## Things You Need Before We Start

### Node

You will need to have Node installed on your machine. The libraries we use require Node 4+ (the examples in this repo use the current release, Node 6). 
If you have an older version, check out [nvm](https://github.com/creationix/nvm) to upgrade.

Check if you have Node installed by typing `node --version` in your terminal. If you get an error, download it here: https://nodejs.org/en/download/

### Git

You will need to have Git installed as well. One quick way to do this is to install GitHub Desktop.

Check if you have Git installed by typing `git --version` in your terminal. If you get an error, download it here: https://desktop.github.com/

### GitHub Account

https://github.com/join

Sign up for a GitHub account. If you want to clone the code locally and push changes, you'll 
need to [generate](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) an SSH key 
and [upload](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) it to GitHub.


## Break Into Teams

Get into teams of 2-3.

Once you are in teams, pick your team name and create a public Slack channel. Invite Avi, Cole, and everyone on your team using the `/invite` command. 

Once you have your team channel set up, DM your team name to Avi or Cole, and one of them will give you a Slack API token.

## Set Up The Project

We will be pair programming during this workshop. One person on the team should fork the repo (see below). Everyone else on the team can clone that copy to their machines and follow the setup steps below.

### Fork this repo

You won't be able to make changes to this example repo, so you will need to fork it (make a copy of it). Have one person click the "Fork" button in the upper right hand corner of this repo. This will give you your own copy of this example repo to work with in your Github account.

You will be using one repo for your team so add everyone on your team as a "collaborator". You can do that at `https://github.com/<GHUsername>/pizza-bot/settings/collaboration`.

### Clone Your Forked Version

Make a local copy of your version using the `git clone` command. Use the "Clone or Download" button to get the URL to your copy of the project.

Type `cd pizza-bot` to change your working directory into your copy of the repo.

### Create a .env File

Create a file named `.env` in the root of your project. Add this line to the file:

```bash
export SLACK_TOKEN=replace_me
```

When we give you a Slack API token, replace `replace_me` with the token.

Once you have your token, open a terminal and type:

```bash
source .env
```

This will expose the variables in your `.env` file to the current terminal session. **You will need to 
type `source .env` for each new terminal window you open.** If you see this error `Missing configuration. Config must 
include either slackToken AND/OR clientId, clientSecret, and port` you forgot to type `source .env` :smile:

### Install Depedencies

Use `npm install` in the root of your project to install all the project dependencies.

## Start Your Bot

This project uses `npm` scripts to perform tasks. You can find them in the `package.json` file.

Type `npm start` in a terminal window to start your bot. Find your bot in Slack and it should have a green active icon next to it. If you don't see that, check your terminal for logs (did you remember to `source .env`?).

In Slack type `hello bot` and see if it responds. You can also type `@<botname> help` to see what help commands it has.

Heads up: your bot will restart on every code change. This is a great feature for development, not so useful in production :smile:

## First Exercise

Once you have your bot running, it's time to dig in! Take a look at the README in this branch for the first exercise: 
https://github.com/SparkPost/pizza-bot/tree/01-plugin
