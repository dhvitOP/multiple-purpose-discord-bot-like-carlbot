const db = require("quick.db");
module.exports = {
  name: "set-welcome",
  aliases: ["welome-set"],
  execute: async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
const message1 = args.join(" ");
if(message1 == "default")
{
  let default1 = "default"
  db.set(`message123_${message.guild.id}`, default1);
  message.channel.send("Done i have set the message of welcome to default")
return;
}
if(message1 == "disable")
{
  let default2 = "disable"
  db.set(`message123_${message.guild.id}`, default2);
  message.channel.send("Done i have disabled the welcome message of this server")
return;
}
if(args[0] == "embed") 
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
    return message.reply("OK i have Disabled embed in welcome message")
  }

}
if(!message1)
{
  return message.channel.send("You didnt Give Me message to set and variables\n Variables:\n -member- : It gives the joiner mention\n -memberscount- It gives the memberscount of the server\n Types:\n disable : write this after command to disable the welcome message\n default: write this after command to send the default message when someone joins the server\n Image enable/disable");
}
if(args[0] == "image")
{
  var image5 = "enable";
  var image6 = "disable";
  let image8 = db.fetch(`image3_${message.guild.id}`);
  if(args[1])
  {
    if(image5 == args[1])
  db.set(`image3_${message.guild.id}`, image5);
  message.channel.send("Done i have set this in my database")
  
  } else if (image6 == args[1])
  {
    db.delete(`image3_${message.guild.id}`)
     message.reply("Done removed image");
  }
  else if (!args[1])
  {
    message.reply("You didnt Gave me enable or disable variable");
  }
  
  return;
}
if(message1)
{
  db.set(`message123_${message.guild.id}`, message1);
  message.channel.send(`Done Your Message Has been set in Database`);
}





  }
}
module.exports.help = {
    name: "set-welcome",
    description: "Set the message of categories of welcome",
    usage: "set-welcome",
    type: "General"  
}