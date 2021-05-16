const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "dumb",
  aliases: ["dumby"],
  execute: async(client, message, args) => {
const embed1 = new Discord.MessageEmbed()
.setDescription("I am getting data of Your dumb Counting")
let broov1 = db.fetch(`broov_${message.member.id}`);
const embed = new Discord.MessageEmbed()
.addField(`You have Said dumb`, `${broov1} Times!!`)
message.channel.send(embed1).then(msg=>{
  msg.edit(embed)
})


}}
module.exports.help = {
    name: "dumb",
    description: "It shows how many times You've Said dumb",
    usage: "dumb",
    type: "Fun"  
}