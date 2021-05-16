const Discord = require("discord.js");
const cnf = require('../../config.js');

module.exports = {
  name: "links",
  aliases: ["getlinks", "support", "link"],
  execute: async(client, message, args, data, db) => {

const embed = new Discord.MessageEmbed()
  .setTitle("Invite the bot")
  .setColor('RANDOM')
  .addField("Invite to Discord server", "[Invite the bot here (Recomended!)](https://www.dumb-dsc.tk/invite)\n[Invite the bot here (Admin Perm)](https://discord.com/oauth2/authorize?client_id=828959241586606110&scope=bot%20applications.commands&permissions=8)")
  .addField("Support", `[Join to official server](https://www.dumb-dsc.tk/support)`)
    .addField("Our Official Bot Website", `[OFFICAL WEBSITE](https://www.dumb-dsc.tk)`)
     .addField(`Vote us Here -`, `[Discord Bot list](https://discordbotlist.com/bots/dumb-bot/upvote) [Void Bots](https://voidbots.net/bot/828959241586606110/vote)`)
     .addField(`Guide -`, `[Video Guide](https://youtu.be/nylG1ZedhmE)`)
  .setFooter("Bot created by " + `Dumbiess`)
  .setImage(`https://cdn.discordapp.com/attachments/789520293311676436/829675394616524869/standard_1.gif`)
  .setTimestamp()
message.channel.send({embed})


}
  }



module.exports.help = {
    name: "links",
    description: "Sends a Important Linksvof bot",
    usage: "links",
    type: "General"  
}