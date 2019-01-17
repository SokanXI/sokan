const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args, prefix) => {
    
    var embedhelp = new Discord.RichEmbed()
    .setTitle('**Liste des commandes :**')
    .addField('__Legendes__ :', 'Vous pouvez voir l\'\état des commandes')
    .addField(':mortar_board:', 'Commande foctionnel à 100%')
    .addField(':rage:', 'Il peut y avoir quelque bug dans la commande')
    .addField(':poop:', 'Cette commande ne marche pas')
    .addBlankField(true)
    .addField(':mortar_board: Modération :', )

    message.channel.send(embedhelp)
    
}
    module.exports.help = {
        name:"help"
      }