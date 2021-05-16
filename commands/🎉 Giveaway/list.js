  const ms = require('ms');

module.exports = {
  name: "list",
  aliases: ["glist", "gl"],
  execute: async(client, message, args) => {
  const Discord = require("discord.js");
    let giveaways = []
    const giveaways1 = client.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id)
    const giveaways2 = giveaways1.filter((g) => !g.ended)
    const giveaways3 = giveaways2.forEach((thisGiveaway)=>{
        let winners = ''
        if(thisGiveaway.winnerCount == 1){
            winners = 'winner'
        }else{
            winners = 'winners'
        }
        giveaways.push(`\`${thisGiveaway.messageID}\` | <#${thisGiveaway.channelID}> | **${thisGiveaway.winnerCount}** ${winners} | Prize: **${thisGiveaway.prize}** | [Giveaway Link](https://discord.com/channels/${message.guild.id}/${thisGiveaway.channelID}/${thisGiveaway.messageID})`)
    })
    const embed = new Discord.MessageEmbed()
    .setColor(client.config.embedColor)
    .setTitle('Current Giveaways')
    .setDescription(giveaways.join('\n') || 'No giveaways are currently running')
    message.channel.send(embed)
    }
    }
    module.exports.help = {
    name: "glist",
    description: "It will list Giveaways of the guild",
    usage: "glist",
    type: "Giveaway"  
}