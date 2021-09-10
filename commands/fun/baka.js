const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "baka",
  aliases: ["bak"],
  execute: async(client, message, args, data, db) => {
    superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("BAKA!!!")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`idiot!`)
      .setURL(response.body.url);
<<<<<<< HEAD
  message.channel.send({embeds: [embed]});
=======
  message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

}
}
module.exports.help = {
    name: "baka",
    description: "BAKA!!!",
    usage: "baka",
    type: "Fun" 
}