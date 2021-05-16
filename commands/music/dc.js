module.exports = {
  name: "dc",
  aliases: ["disconnect"],
  execute: async(client, message, args, data, db) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) 
    {
      message.guild.me.voice.channel.leave();
         message.react('✅')
         message.channel.send("Done Leaved the voice channel")
    return;
    }
     
      message.client.queue.delete(message.guild.id);
    message.react('✅')
    queue.songs = []
    queue.connection.dispatcher.end('Stopped!')
message.guild.me.voice.channel.leave();
}
}
module.exports.help = {
    name: "disconnect",
    description: "Will Leave the voice chanel and delete the queue",
    usage: "disconnect",
    type: "Music" 
}