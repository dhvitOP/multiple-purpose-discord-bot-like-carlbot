module.exports = {
  name: "skip",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue){ return message.channel.send({
        embed: {
            description: 'There is nothing in the queue right now! add using `m!play <songName>`',
            color: 'BLACK'
        }
    })
}
    if(queue.songs.length !== 0) {
        message.react('✅')
        queue.connection.dispatcher.end('Okie skipped!')
    }
}
}
module.exports.help = {
    name: "skip",
    description: "Skips the current playing music",
    usage: "skip",
    type: "Music" 
}