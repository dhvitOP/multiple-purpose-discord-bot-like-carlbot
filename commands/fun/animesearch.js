const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  aliases: ["asearch"],
  execute: async(client, message, args, data, db) => {

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.MessageEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor("RANDOM")
      .addField('English Title', data.englishTitle)
      .addField('Japanese Title', data.japaneseTitle)
      .addField('Type', data.type)
      .addField('Episodes', data.episodes)
      .addField('Rating', data.rating)
      .addField('Aired', data.aired)
      .addField('Score', data.score)
      .addField('Score Stats', data.scoreStats)
      .addField('Link', data.url);

<<<<<<< HEAD
      message.channel.send({embeds: [malEmbed]});
=======
      message.channel.send(malEmbed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76

    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Please enter a vaild name!"
            }}));

}
}
module.exports.help = {
    name: "animesearch",
    description: "Search for anime",
    usage: "animesearch <name>",
    type: "Fun"  
}

