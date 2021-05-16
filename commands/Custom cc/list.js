const Discord = require("discord.js");
const db = require("quick.db");
const { get } = require('../../cc_list_test/sqlite.js')
module.exports = {
  name: "cc-list",
  aliases: ["list-cc"],
  execute: async(client, message, args, data) => {
    let guild = message.guild;
        data = await get(message, guild)
    let page = Number(args[0]) 
    if (!page || isNaN(page) || page < 1) page = 1
    let obj = { min: page * 10 - 10, max: page * 10 }
    let tpages = 1
    let n = 10
    data.logs.map((x, y) => {
      if (y == 10) n += 10, tpages++
    })
    if (page > tpages) return message.channel.send(`Page not found.`)
let logs = []
data.logs.map((x, y) => {
      if (y >= obj.min && y < obj.max) logs.push(x)
    }) 

    const embed = new Discord.MessageEmbed()
    .addField(`**Custom Commands List**`, logs.length == 0 ? "No Commands found!" : logs.join("\n"))
 .setFooter(`Showing Page ${page}/${tpages}`)
    message.channel.send(embed);

  }
}