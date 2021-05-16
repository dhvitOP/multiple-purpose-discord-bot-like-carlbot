module.exports = {
  name: "pause",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'There is nothing playing right now to pause!'
        }
    })
    if(queue.playing !== false)
    queue.connection.dispatcher.pause()
    message.react('⏸')
    message.channel.send('Paused The music!')
    
}
}
module.exports.help = {
    name: "pause",
    description: "Will pause the current playing song",
    usage: "pause",
    type: "Music" 
}