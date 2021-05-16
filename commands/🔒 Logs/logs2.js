const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "remove-logs",
  aliases: ["logs-del", "logs-delete", "logs-remove"],
  execute: async(client, message, args) => {
     if (!message.member.hasPermission("MANAGE_SERVER"))
     {
      return;
    }
message.guild.channels.cache.find(channel => channel.name === "dumb-logs").delete("Logs Off");


message.reply("Done removed the channel and logs feature both");
  }
}