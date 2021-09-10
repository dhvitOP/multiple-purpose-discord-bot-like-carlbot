const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

    module.exports = {
  name: "uptime",
  aliases: [],
  execute: async(client, message, args, data, db) => {
  
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
let embed = new Discord.MessageEmbed()
.setTitle("Uptime")
.setDescription(`${duration}`)
.setColor('RANDOM')

<<<<<<< HEAD
message.channel.send({embeds: [embed]});
=======
message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
}
    }

module.exports.help = {
    name: "uptime",
    description: "Display a bot uptime",
    usage: "uptime",
    type: "General"   
}