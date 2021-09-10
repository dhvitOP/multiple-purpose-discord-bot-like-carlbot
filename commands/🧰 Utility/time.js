const superagent = require("snekfetch");
const Discord = require('discord.js')

    module.exports = {
  name: "time",
  aliases: [],
  execute: async(client, message, args, data, db) => {

var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField("Today is:", `${Day}` + ", " + `${Month}` + ", " + `${Year}`)
.addField("Time of day:", `${today.toString().split(" ")[4]}`)
.setFooter("This Time is ofOur hosting Service")
<<<<<<< HEAD
message.channel.send({embeds: [embed]})
=======
message.channel.send({ embed })
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76

}
  }
    
module.exports.help = {
    name: "time",
    description: "Display a actual time",
    usage: "time",
    type: "Utility"   
}