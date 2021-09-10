const Discord = require("discord.js");
const superagent = require("snekfetch");
     
            module.exports = {
  name: "waifu",
  aliases: [],
  execute: async(client, message, args, data, db) => {

            superagent.get('https://nekos.life/api/v2/img/waifu')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setDescription(message.author.toString() + " This is your waifu!")
              .setImage(response.body.url)
              .setColor(`RANDOM`)
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
    name: "waifu",
    description: "Display a random waifu image",
    usage: "waifu",
    type: "Fun"  
}

