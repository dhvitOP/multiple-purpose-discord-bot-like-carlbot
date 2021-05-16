module.exports = {
  name: "volume",
  aliases: [],
  execute: async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)


if(args[0] <= 10){
  if(args[0] == "default")
  {
    queue.volume = 1;
    return message.reply("OK Volume set to default :thumbsup:")
  }
message.reply(`Done the volume is now ${args[0]}`);
 queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 3);
queue.volume = args[0];
return;
  } else
  {
    return message.reply("You cannot do volume more than 10 (It is for safety purpose)");
  }
  }
}
module.exports.help = {
    name: "volume",
    description: "Will iNCREASE/DECREASE THE VOLUME OF SONG",
    usage: "volume",
    type: "Music" 
}