const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");

module.exports = {
  name: "lyrics",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    
    const queue = message.client.queue.get(message.guild.id);
    if(!args[0])
    {
    if (!queue) return message.channel.send("There is nothing playing.").catch(console.error);
    }
    let lyrics = null;
    
    if(!args[0])
    {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title} :(`;
    } 
    if(args[0])
    {
      lyrics = await lyricsFinder(args[0], "");
      if (!lyrics) lyrics = `No lyrics found for ${args[0]} :(`;
    }

    let lyricsEmbed = new MessageEmbed()
      .setTitle(`Lyrics For ${args[0]}`)
      .setDescription(lyrics)
      .setColor("GREEN")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
}
}
module.exports.help = {
    name: "lyrics",
    description: "You can see lyrics of the current playing song",
    usage: "lyrics",
    type: "Music" 
}