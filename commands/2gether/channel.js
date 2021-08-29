const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "set-global",
  aliases: ["global-channel", "channel-global"],
  execute: async(client, message, args, data) => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
  if(args[0] == "disable" || db.has(`globalchat_${message.guild.id}`))
  {
    let todel = db.fetch(`globalchat_${message.guild.id}`)
    db.delete(`globalchat_${message.guild.id}`)
    const aembed1 = new Discord.MessageEmbed()
   .setDescription("<a:testing:841362113212842045> **Successfull** <a:testing:841362113212842045>")
   .addField("Channel to Delete From Database:", `<#${todel}>`)
   message.channel.send(aembed1);
  }
 var wchannel =  message.mentions.channels.first().id || args[0];
 
  if(!args[0])
  {
       var errembed = new Discord.MessageEmbed()
    .setDescription("<a:testfail:841362226149064755> **Failed** <a:testfail:841362226149064755>")
    .addField("Error:", `You Didnt Gave me Channel`)
     return message.channel.send(errembed)
  }
  if(!message.guild.channels.cache.get(wchannel))
  {
        var errembed = new Discord.MessageEmbed()
    .setDescription("<a:testfail:841362226149064755> **Failed** <a:testfail:841362226149064755>")
    .addField("Error:", `Not Valid Channel`)
     return message.channel.send(errembed)
  }
   db.set(`globalchat_${message.guild.id}`, wchannel)
           const aembed = new Discord.MessageEmbed()
   .setDescription("<a:testing:841362113212842045> **Successfull** <a:testing:841362113212842045>")
   .addField("Channel to Send Global Messages:", `<#${wchannel}>`)
   message.channel.send(aembed);
  }
}
