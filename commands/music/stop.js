const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "stop",
  aliases: ["clearq", "clearqueue", "queueclear", "qclear", "musicbug", "bugmusic"],
  execute: async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'There is nothing playing to be stopped!',
            color: 'BLACK'
        }
    })
    message.react('✅')
    queue.songs = []
    queue.connection.dispatcher.end('Stopped!')
    
            var prefix =  db.fetch(`two_${message.guild.id}`);
    if(prefix === "yes")
    {
       if (!queue) {
            
            message.client.queue.delete(message.guild.id);
            message.channel.send('There are no songs in queue')
            return;
        }
       
    } else 
    {
      if(!queue)
      {
          var prefix1 =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix1)
    {
      var prefix1 = ".";
    }

        queue.voiceChannel.leave();
            message.client.queue.delete(message.guild.id);
            message.channel.send(`There are no songs in queue, I\'m leaving the voice channel! You turn this off by doing ${prefix1}24/7`)
            return;
      }
    }
}
}
module.exports.help = {
    name: "stop",
    description: "Will stop the current all playing music",
    usage: "stop",
    type: "Music" 
}