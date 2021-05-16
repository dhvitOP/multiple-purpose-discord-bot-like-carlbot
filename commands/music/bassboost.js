const db = require("quick.db");
module.exports = {
  name: "bassboost",
  aliases: ["bb"],
  execute: async(client, message, args) => {
       const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue)
    {
      message.reply("No songs are playing currently")
      return;
    }
    let bb = db.fetch(`bb_${message.guild.id}`);
    if(bb == "1")
    {
queue.connection.dispatcher.setVolumeLogarithmic(0.57);
message.reply("Done the song is now normal :thumbsup:");
db.delete(`bb_${message.guild.id}`);
return;
    }
 else{

queue.connection.dispatcher.setVolumeLogarithmic(1.3);
queue.volume = "0.65";
message.reply("Done the song is now bassboosted :thumbsup: I hope we meet in heaved also please shut your volume down otherwise your ear will blast");
let yea = "1";
db.set(`bb_${message.guild.id}`, yea);
 }
  }
}
module.exports.help = {
    name: "bassboost",
    description: "Will bassboost the current song",
    usage: "bassboost",
    type: "Music" 
}