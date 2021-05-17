const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "24/7",
  aliases: ["pleaj"],
  execute: async(client, message, args) => {

 var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }

 var prefix1 =  db.fetch(`two_${message.guild.id}`);
 
 if(message.member.hasPermission("MANAGE_MESSAGES")) 
 {
  
  if(prefix1 === "yes")
  {
  const embed1 = new MessageEmbed()
  embed1.setDescription(`Done Your server is now removed from 24/7 Music Servers`)
  message.channel.send(embed1);
    let ans = "no";
  db.set(`two_${message.guild.id}`,ans);
  return;
  }
else {

  const embed = new MessageEmbed()
  embed.setDescription(`Done Your server is now stored in 24/7 Music Servers dont worry its free!!!`)
  message.channel.send(embed);
  let ans = "yes";
  db.set(`two_${message.guild.id}`,ans);
}
 }
}
}
module.exports.help = {
    name: "24/7",
    description: "It will turn on the 24/7 mode of music for free!!",
    usage: "24/7",
    type: "Music",
}