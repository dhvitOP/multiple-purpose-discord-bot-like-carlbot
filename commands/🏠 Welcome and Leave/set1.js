const db = require("quick.db");
module.exports = {
  name: "set-leave",
  aliases: ["leave-set"],
  execute: async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
if (!args [0]) return message.channel.send ("No arguments given")
const message1 = args.join(" ");
if(message1 == "default")
{
  let default1 = "default"
  db.set(`message1234_${message.guild.id}`, default1);
  message.channel.send("Done i have set the message of leave to default")
return;
}
if(message1 == "disable")
{
  let default2 = "disable"
  db.set(`message1234_${message.guild.id}`, default2);
  message.channel.send("Done i have disabled the leave message of this server")
return;
}
if(rgs[0] == "embed") 
{
  let onoroff = db.fetch(`message1234_${message.guild.id}`);
  if(args[1] == enable)

  {
  let default5 = "on";

  if(!onoroff)
  {
    return message.reply("You dont have any custom message to send in embed");
  }
  db.set(`message45_${message.guild.id}`, default5);
  return message.reply("Ok now i will send your given message in embed");
  }
  if(args[1] == "disable")
  {
     if(!onoroff)
  {
    return message.reply("You dont have any custom message to send in embed");
  }
    db.delete(`message45_${message.guild.id}`);
    return message.reply("OK i have Disabled embed in leave message")
  }

}
if(!message1)
{
  return message.channel.send("You didnt Give Me message to set and variables\n Variables:\n -member- : It gives the leaver mention\n -memberscount- It gives the memberscount of the server\n Types:\n disable : write this after command to disable the leave message\n default: write this after command to send the default message when someone leaves the server");
}
if(message1)
{
  db.set(`message1234_${message.guild.id}`, message1);
  message.channel.send(`Done Your Message Has been set n Database`);
}





  }
}
module.exports.help = {
    name: "set-leave",
    description: "Set the message of categories of leave",
    usage: "set-leave",
    type: "General"  
}