const Discord = require('discord.js')
const config = require("../config.js")
const fetch = require("node-fetch");
module.exports = (client, guild, message) => {

 

  
    let channel = client.channels.cache.get("832320402868666448")
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`Left Server!`)
    .setColor(`#19ec1d`)
    .setDescription(`Name & Id: **${guild.name}(\`${guild.id})\`**\nTotal Users: **${guild.memberCount}**\nOwner: **${guild.owner}**`)
    .setThumbnail(guild.iconURL());
     if (channel) channel.send(embed);
    
  } 
