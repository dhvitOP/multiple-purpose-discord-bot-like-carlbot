const db = require("quick.db");
module.exports = {
  name: "connect",
  aliases: ["join"],
  execute: async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');
      var prefix =  db.fetch(`two_${message.guild.id}`);
    if(prefix === "yes")
    {
       channel.join(channel);
message.channel.send("Done Joined Your voice channel")
       
    } else 
    {
     return message.reply("You cannot do this first activate the 24/7 Music")
    }
}
}
  
module.exports.help = {
    name: "join",
    description: "Will Join the voice chanel",
    usage: "join",
    type: "Music" 
}