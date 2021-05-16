const db = require("quick.db");
const Discord = require("discord.js");
const fs = require("fs");
const yaml = require("js-yaml");
const { mainprefix, color } = require("../../config.js")


module.exports = {
  name: "serverstats",
  aliases: [],
  execute: async(client, message, args) => {
      let embed = db.fetch(`embed_${message.guild.id}`)
    const stats = new Discord.MessageEmbed()
      .setColor(`${embed || color}`)
    .addField(`👑 Server Owner`, `**${message.guild.owner}**`)
    .addField(`👒 MemberCount`, `**${message.guild.memberCount}**`)
    .addField(`✅ Online Members`, `**${message.guild.members.cache.filter(member => member.presence.status !== "offline").size}**`)
    .addField(`🎈 Offline Members`, `**${message.guild.members.cache.filter(member => member.presence.status == "offline").size}**`)
    .addField(`🧸 Emojis Count`, `**${message.guild.emojis.cache.size}**`)
    .addField(`🎐 Role Count`, `**${message.guild.roles.cache.size}**`)
    message.channel.send(stats)
  }
}
module.exports.help = {
    name: "serverstats",
    description: "It shows the stats of server",
    usage: "serverstats",
    type: "General",
}
