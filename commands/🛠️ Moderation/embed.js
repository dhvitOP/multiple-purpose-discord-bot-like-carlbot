const db = require("quick.db");
const fs = require("fs");
const yaml = require("js-yaml");
const Discord = require("discord.js");
const {
  mainprefix,
  defaultjoinmessage,
  defaultleavemessage,
  color
} = require("../../config.js");

module.exports = {
  name: "color",
  aliases: ["embed", "colour", "embedcolor", "embedcolour"],
  execute: async(client, message, args) => {
    if(!args[0])
    {
      return message.reply("No color Given lmao?")
    }
    let color = args[0];
    let embed = db.fetch(`embed_${message.guild.id}`);
    db.set(`embed_${message.guild.id}`, color);
    const sucs = new Discord.MessageEmbed()
      .setDescription(
        `Set The Embed Color For **${message.guild.name}** to ${color}`
      )
      .setColor(`${embed || color}`)
      .setAuthor(client.user.username, client.user.avatarURL());
<<<<<<< HEAD
    message.channel.send({embeds: [sucs]});
=======
    message.channel.send(sucs);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  }
}
module.exports.help = {
    name: "embed",
    description: "It will send the messages of sendembed command in embed of your color that youve choosen here",
    usage: "embed",
    type: "Moderation"   
}
