const db = require("quick.db");
module.exports = {
  name: "afk",
  aliases: [],
  execute: async(client, message, args) => {
      if (db.has(`${message.guild.id}_${message.author.id}` + '.afk')) {
       message.member.setNickname('').catch(error => message.channel.send("Couldn't update your nickname."));
       message.reply("Removed AFK Done :thumbsup:");
        db.delete(`${message.guild.id}_${message.author.id}` + '.afk')
        db.delete(`${message.guild.id}_${message.author.id}` + '.messageafk')
      } else {
           message.member.setNickname(`${message.author.username} [AFK]`).catch(error => message.channel.send("Couldn't update your nickname."));
       message.channel.send(`Done You have seted Your AFK Reason: ${args.join(" ")}`)
        db.set(`${message.guild.id}_${message.author.id}` + '.afk', 'true')
        if(!args[0]){
          let none = "none";
          db.set(`${message.guild.id}_${message.author.id}` + '.messageafk', none)
          return;
        }
        db.set(`${message.guild.id}_${message.author.id}` + '.messageafk', args.join(" "))
      }
  }
}