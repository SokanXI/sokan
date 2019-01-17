const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTM0ODM5NjgzOTM1NjMzNDU4.Dx_b1g.gHXmEymedyZlx5wQqPAF6AT7Lxk');