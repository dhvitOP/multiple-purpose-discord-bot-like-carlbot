const ytdl = require("ytdl-core-discord");
var scrapeYt = require("scrape-yt");
const discord = require("discord.js");
var { SearchOptions } = require("scrape-yt");
const client = new discord.Client();
const db = require("quick.db");
module.exports = {
  name: "play",
  aliases: ["p"],
  execute: async(client, message, args) => {

    if(!args[0]) return message.channel.send('You didn\'t provide a song to play!')
    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send('You need to join a voice channel to play a music!')

    if (!channel.permissionsFor(message.client.user).has("CONNECT")) return message.channel.send('I don\'t have permission to join the voice channel')

    if (!channel.permissionsFor(message.client.user).has("SPEAK"))return message.channel.send('I don\'t have permission to speak in the voice channel')

   

    const server = message.client.queue.get(message.guild.id);
    var video = await scrapeYt.search(args.join(' '))
    var result = video[0];
    if(!video[0])
        {
          
           return message.reply("Currently playlist is not support in the bot");
        }
    

    const song = {
        id: result.id,
        title: result.title,
        duration: result.duration,
        thumbnail: result.thumbnail,
        upload: result.uploadDate,
        views: result.viewCount,
        requester: message.author,
        channel: result.channel.name,
        channelurl: result.channel.url
      };

    var date = new Date(0);
    date.setSeconds(song.duration); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);

      if (server) {
        server.songs.push(song);
        console.log(server.songs);
        let embed = new discord.MessageEmbed()
        .setTitle('Added to queue!')
        .setColor('#00fff1')
        .addField('Name', song.title, true)
        .setThumbnail(song.thumbnail)
        .addField('Views', song.views, true)
        .addField('Reqeusted By', song.requester, true)
        .addField('Duration', timeString, true)
        return message.channel.send(embed)
    }

    const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: channel,
        connection: null,
        songs: [],
        volume: 1,
        playing: true
    };
    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);


    const play = async song => {
        const queue = message.client.queue.get(message.guild.id);
            var prefix =  db.fetch(`two_${message.guild.id}`);
    if(prefix === "yes")
    {
       if (!song) {
              for (let member of channel.members) {
            member[1].voice.setMute(false)
        }
            message.client.queue.delete(message.guild.id);
            message.channel.send('There are no songs in queue')
            return;
        }
       
    } else 
    {
      if(!song)
      {
          var prefix1 =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix1)
    {
      var prefix1 = ".";
    }
         for (let member of channel.members) {
            member[1].voice.setMute(false)
        }
        
        queue.voiceChannel.leave();
            message.client.queue.delete(message.guild.id);
            message.channel.send(`There are no songs in queue, I\'m leaving the voice channel! You turn this off by doing ${prefix1}24/7`)
            return;
      }
    }
       

        const dispatcher = queue.connection.play(await ytdl(`https://youtube.com/watch?v=${song.id}`, {
            filter: format => ['251'],
            highWaterMark: 1 << 25
        }), {
            type: 'opus'
        })
            .on('finish', () => {
                queue.songs.shift();
                play(queue.songs[0]);
            })
            .on('error', error => console.error(error));
            
        dispatcher.setVolumeLogarithmic(0.57);
        let noiceEmbed = new discord.MessageEmbed()
        .setTitle('Started Playing')
        .setThumbnail(song.thumbnail)
        .addField('Name', song.title, true)
        .addField('Requested By', song.requester, true)
        .addField('Views', song.views, true)
        .addField('Duration', timeString, true)
        queue.textChannel.send(noiceEmbed);
    };


    try {
        const connection = await channel.join();
        queueConstruct.connection = connection;
        play(queueConstruct.songs[0]);
        connection.voice.setSelfDeaf(true);
         
         
        const member1 = "828959241586606110";
      
    } catch (error) {
        console.error(`I could not join the voice channel`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send(`I could not join the voice channel: ${error}`);
    }
}
}
module.exports.help = {
    name: "play",
    description: "It plays a music",
    usage: "play <music_name>",
    type: "Music" 
}