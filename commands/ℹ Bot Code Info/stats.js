const Discord = require("discord.js");
const ms = require("parse-ms");
const config = require("../../config.js");
const db = require("quick.db");
module.exports = {
  name: "stats",
  aliases: ["botstat", "stat", "botstats", "botinfo"],
  description: "",
  execute: async (client, message, args) => {
    

     var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }

    let uptime = [];

    Object.entries(ms(client.uptime)).map((x, y) => {
      if (x[1] > 0 && y < 4) uptime.push(`**${x[1]} ${x[0]}**`);
    });

    const embed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`${client.user.username} stats`)
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        `📂Memory Usage:`,
        (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB",
        false
      )
      .setImage(`https://voidbots.net/api/embed/${client.user.id}`)
      .addField(`🏘Servers Count:`, `${client.guilds.cache.size}`, false)
      .addField(`👥Users Count:`, `${client.users.cache.size}`, false)
      .addField(`Channels Count:`, `${client.channels.cache.size}`, false)
      .addField(`Shards:`, `1`, false)
      .addField(`🗓 Creation Date -`, `6th February 2021`, false)
      .addField(`Made With :`, `Node.js V12 And SQ Lite DataBase And Your Love`, false)
      .addField(`:tools: Developers of This Bot -`, `Dhvit And E-E-3`, false)
      .addField(`⚙➡Prefix : `, `${prefix}`, false)
      .addField(`:chart_with_upwards_trend:Uptime:`, uptime.join(", "), false)
    message.channel.send(embed);
  }
};
module.exports.help = {
    name: "stats",
    description: "It will shows you the bot stats",
    usage: "stats",
    type: "General" 
}