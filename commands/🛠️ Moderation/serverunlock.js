const db = require("quick.db")
const Discord = require("discord.js")
module.exports = {
  name: "serverunlock",
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
      if(!content)
    {
      message.channel.send(`You didnt gave me an text or vc option e.g - ${prefix}serverunlock text/vc/all`);
      return;
    }
    if (content.toLowerCase() === "text") 
    {
      message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "text")
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     allow: ['SEND_MESSAGES'],
  },
], `${message.member.id} Told to unlock the server`);
}) 
message.channel.send(`Done i have unLocked the all text Channels which are in server`)
}
if (content.toLowerCase() === "vc") 
    {
        message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "voice")
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     allow: ['CONNECT'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Done i have unLocked the all voice Channels which were in server`)
    }
    if (content.toLowerCase() === "all") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     allow: ['CONNECT', 'SEND_MESSAGES'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Done i have unLocked the all voice  AND TEXT Channels which were in server`)
    }
      if (content.toLowerCase() === "unhide") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     allow: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Done i have unhidden the all voice  AND TEXT Channels which were in server`)
    }
}
}
module.exports.help = {
    name: "serverunlock",
    description: "It will unlock the whole server",
    usage: "serverunlock text/vc/all/unhide",
    type: "Moderation"   
}