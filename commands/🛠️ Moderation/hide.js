const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "hide",
  aliases: [],
  execute: async(client, message, args) => {
    
     let embed = db.fetch(`embed_${message.guild.id}`);
    
    if (!message.member.hasPermission("MANAGE_GUILD"))
    {
      message.channel.send(
        "You need `MANAGE GUILD` to configure the server settings!"
      );
      return;
      }
    let content = args[0];
  
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }
   message.channel.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Told to lock the server`);
message.channel.send("Done i have Hidden this channel now :thumbsup:")

    
}}
module.exports.help = {
    name: "hide",
    description: "It hide the currrent channel",
    usage: "hide",
    type: "Moderation"   
}