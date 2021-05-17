const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./json db/warnings.json", "utf8"));

    module.exports = {
  name: "warns",
  aliases: ["strikes"],
  execute: async(client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
            color: 16734039,
            description: "You don't have premissions to check members warns!"
        }})

let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
  if(!wUser) return message.channel.send({embed: {
            color: 16734039,
            description: "I can't find the user!"
        }})
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
  let warnlevel = warns[wUser.id].warns
  
  let warnEmbed = new Discord.MessageEmbed()
  .setTitle("Warns")
  .setColor("RANDOM")
  .addField(`Number of warns of `, `<@${wUser.id}> is warns: ${warnlevel}`)
  .setTimestamp()
  message.channel.send(warnEmbed);
  
  

}
    }
module.exports.help = {
    name: "warns",
    description: "Show number of warns",
    usage: "warns <user>",
    type: "Moderation"
}