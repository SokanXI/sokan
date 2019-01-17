const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, prefix) => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0]
    if(!command.startsWith('/')) return;
    let botmessage = args.join(" ");
    if(message.author.id !== '385034608963616771') return message.reply("Only my owner can use this!!");


    let image = message.attachments.first().url;


    bot.user.setAvatar(image);

    let iEmbed = new Discord.RichEmbed()
        .setAuthor('✅ Photo altered successfully')
        .setColor('#1E90FF')
        .addField("Your message 1", "your message 2")
    message.channel.send(iEmbed)

}
module.exports.help = {
    name: "setavatar"
  }