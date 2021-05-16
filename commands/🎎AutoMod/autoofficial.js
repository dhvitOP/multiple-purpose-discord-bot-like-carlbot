const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  name: "auto-official-role",
  aliases: ["auto-official", "auto-name-role","anr", "af", "autoofficial"],
  execute: async(client, message, args) => {
     if (!message.member.hasPermission("MANAGE_SERVER")) {
       return;
     }
if(!args[0])
{
  return message.reply("You didnt Giv me role or nickname to set\n example - .anr role @Officials or .anr name RYΠΣX丶");
}
if(args[0] == "role")
{
  var role2 = message.mentions.roles.first();
  if(role2)
  {
    var role2 = message.mentions.roles.first().id;
  }
  else if(!role2){
    var role2 = args[1];
  }
  if(!role2){
    return message.reply("You didnt Gave me a valid role");
  }
  db.set(`tagg_${message.guild.id}`, role2);
  return message.reply("Done now i will give this role when someone add your given tag to his username");
}
if(args[0] == "name")
{
 let name = args[1]; 
 if(!name)
 {
   return message.reply("Please Give a Name to set name inmy database");
 }
 db.set(`tagn_${message.guild.id}`, name);
 return message.reply("Done now i will give role when someone add this name to his/her username");
}
  }
}