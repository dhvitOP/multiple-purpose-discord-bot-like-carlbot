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
message.channel.send({ embed })

}
  }
    
module.exports.help = {
    name: "time",
    description: "Display a actual time",
    usage: "time",
    type: "Utility"   
}