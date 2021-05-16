const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "np",
  aliases: ["nowplaying"],
  execute: async(client, message, args, data, db) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed:{
            title: 'There is nothing playing right now!'
        }
    })
    message.channel.send({
        embed:{
            title: 'Now Playing',
            description: queue.songs[0].title + ' Requested By: ' + '<@' + queue.songs[0].requester + '>',
            color: 'YELLOW',
            thumbnail: queue.songs[0].thumbnail
        }
    })
}
}
module.exports.help = {
    name: "nowplaying",
    description: "It will show which song is currently playing",
    usage: "nowplaying",
    type: "Music" 
}