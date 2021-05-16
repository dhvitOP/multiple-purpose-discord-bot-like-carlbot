const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const Color = `RANDOM`;
module.exports = {
  name: "stealemoji",
  aliases: ["steal", "addemoji"],
  execute: async(client, message, args, data, db) => {
if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      return message.channel.send(`You Don't Have Permission To Use This Command! Manage Emojis`)
    }
    
     const name = args[0];
    
if (name.includes("https://") || name.includes(":")) {

  
    message.channel.send("Give me a emoji name to save with it");
    return;
  }
    const emoji = args[1];
    if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);
    if(message.content.includes("https://"))
    {
      var Link = args[1];
    }
    if (!message.content.includes("https://")) {
      var Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
    }
    
   
     
      message.guild.emojis.create(
        `${Link}`,
        `${name}`
      ); 
      const Added = new Discord.MessageEmbed()
        .setTitle(`Emoji Added`)
        .setColor(`${Color}`)
        .setDescription(
          `Emoji Has Been Added! | Name : ${name} | Preview : [Click Me](${Link})`)
        .setFooter(`If the emoji doesnt uploaded that means the emoji size you tryed to upload is more than 256.0 KB `);
      return message.channel.send(Added);
   
  }
}
  module.exports.help = {
    name: "stealemoji",
    description: "It will steal the given emoji",
    usage: "stealemoji <emoji>",
    type: "Moderation" 
}