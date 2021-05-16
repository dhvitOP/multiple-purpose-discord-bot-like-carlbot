const Discord = require('discord.js');
const config = require("../config.js");
const fetch = require("node-fetch");
module.exports = (client, guild, message) => {

fetch(`https://api.voidbots.net/bot/stats/${client.user.id}`, {
    method: "POST",
    headers: { 
      Authorization: "VOID_jMEDa9AFbx59QrwSxL9eoxkLqXZdSqAqfjwiUmymq8ewovMs",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"server_count": client.guilds.cache.size})
  }).then(response => response.text())
    let channel = client.channels.cache.get("832320402868666448");
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`New Server!`)
    .setColor(`#19ec1d`)
    .setDescription(`Name & Id: **${guild.name}(\`${guild.id})\`**\nTotal Users: **${guild.memberCount}**\nOwner: **${guild.owner}**
    Total servers :${client.guilds.cache.size}`)
    .setThumbnail(guild.iconURL());
     if (channel) channel.send(embed);
    
  } 
