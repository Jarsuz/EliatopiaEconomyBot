const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('>'))return;  


    let embed = new Discord.RichEmbed()
    .setDescription("**VIP Ranks**\n\nVIP: 3500 Coins [>buy vip]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [>buy nikes]\nCar: 800 [>buy car]\nMansion: 1200 [>buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}