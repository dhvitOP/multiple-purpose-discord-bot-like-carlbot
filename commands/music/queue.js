const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "queue",
  aliases: ["q"],
  execute: async(client, message, args, data, db) => { 



        const { guild, channel } = message;
        const serverQueue = message.client.queue.get(guild.id);
        if (!serverQueue) return channel.send('There is currently no queue in this guild.');
        let i = 0;
        return message.channel.send([
            '__**Music Queue**__',
            serverQueue.songs.map(song => `**${++i}.** ${song.title}`).join('\n'),
        ].join('\n'));
    }
  }

module.exports.help = {
    name: "queue",
    description: "will give you queue of your songs",
    usage: "queue",
    type: "Music" 
}