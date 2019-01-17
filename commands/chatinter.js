const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
let xoargs = message.content.split(" ").slice(1);
let xo03 = xoargs.join(" ")
var xo02 = message.guild.channels.find('name', 'neji-chat');
if(!xo02) return message.reply("Le channel **Neji-chat** est introuvable")
if(message.channel.name !== 'neji-chat') return message.reply("Commande à effectuer dans **Neji-chat**")
if(!xo03) return message.reply("Merci d'écrire un message qui sera envoyé à tous les serveurs où je suis.")
var embed = new Discord.RichEmbed()
.setColor("0x88CC14")
.setTitle("UltraGlobal Message")
.addField("Pseudo de l'utilisateur", message.author.username + "#" + message.author.discriminator, true)
.addField("Discord", message.guild.name, true)
.addField("Message", xo03)
.setFooter("© Sokan#9890 | Tous droits réservés.")
.setTimestamp()
.setThumbnail(message.guild.avatar)
bot.channels.findAll('name', 'neji-chat').map(channel => channel.send({embed}))
message.delete();
}

module.exports.help = {
    name: "chat"
  }