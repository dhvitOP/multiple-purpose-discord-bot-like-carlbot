const Discord = require("discord.js");
const db = require("quick.db");
const { get } = require('../../cc_list_test/sqlite.js')
module.exports = {
  name: "cc-delete",
  aliases: ["delete-cc", "cc-del", "del-cc"],
  execute: async(client, message, args, data) => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;

        var name = args[0].toLowerCase();

        if(!name) 
        {
                var errembed = new Discord.MessageEmbed()
    .setDescription("<a:testfail:841362226149064755> **Failed** <a:testfail:841362226149064755>")
    .addField("Error:", `You Didnt Gave me a Name of Your Custom Command To Delete`)
     return message.channel.send(errembed)
        }
        let todel = db.fetch(`${args[0]}_${message.guild.id}`)
        if(!todel){
                var errembed = new Discord.MessageEmbed()
    .setDescription("<a:testfail:841362226149064755> **Failed** <a:testfail:841362226149064755>")
    .addField("Error:", `That Command Didnt Exist`)
     return message.channel.send(errembed)
        }
             
        const aembed = new Discord.MessageEmbed()
   .setDescription("<a:testing:841362113212842045> **Successfull** <a:testing:841362113212842045>")
   .addField("Custom Command Name to Delete:", name)
   .addField("Custom Command Reply/Response to Delete:", todel)
   message.channel.send(aembed);
       data.logs.shift(`Command Name - ${name} Command Response - ${todel}`)
        db.subtract(`cccount_${message.guild.id}`, 1)
          db.set(`logs_${message.guild.id}`, data.logs)
    db.delete(`${name}_${message.guild.id}`);


  }
}