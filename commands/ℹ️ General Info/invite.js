const Discord = require("discord.js");
const cnf = require('../../config.js');

module.exports = {
  name: "invite",
  aliases: ["getbot"],
  execute: async(client, message, args, data, db) => {
try {
const embed = new Discord.MessageEmbed()
  .setTitle("Invite the bot")
  .setColor('RANDOM')
  .addField("Invite to Discord server", "[Invite the bot here (Recomended!)](https://www.dumb-dsc.tk/invite)\n[Invite the bot here (Admin Perm)](https://discord.com/oauth2/authorize?client_id=828959241586606110&scope=bot%20applications.commands&permissions=8)")
  .addField("Server", `[Join to official server](https://www.dumb-dsc.tk/support)`)
    .addField("Our Official Bot Website", `[OFFICAL WEBSITE](https://www.dumb-dsc.tk)`)
     .addField(`Vote us Here -`, `[Click Here](https://discordbotlist.com/bots/dumb-bot/upvote)  [Void Bots](https://voidbots.net/bot/828959241586606110/vote)`)
  .setFooter("Bot created by Dumbiess")
  .setImage(`https://cdn.discordapp.com/attachments/789520293311676436/829675394616524869/standard_1.gif`)
  .setTimestamp()
message.author.send({embed})

message.channel.send({embed: {
            color: 3447003,
            description: "Check a DM message!"
        }})
} catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }})
}
}
}
module.exports.help = {
    name: "invite",
    description: "Sends a bot invite",
    usage: "invite",
    type: "General"  
}