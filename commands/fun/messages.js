const Discord = require('discord.js')
const db = require('quick.db')


module.exports = {
  name: "messages",
  aliases: [],
  execute: async(client, message, args) => {
  var user = message.mentions.members.first();
  if(!user)
  {
    var user = message.author;
  }
const embed1 = new Discord.MessageEmbed()
.setDescription("I am getting data of Your Messages Counting")
let broov1 = db.fetch(`messages_${message.guild.id}_${user.id}`);
const embed = new Discord.MessageEmbed()
.addField(`You have Typed`, `${broov1} Messages!!`)
.setFooter("1 Message will be stored in  data in 5 seconds to avoid spam messages")
message.channel.send(embed1).then(msg=>{
  msg.edit(embed)
})


}
  }
module.exports.help = {
    name: "messages",
    description: "It shows how many times You've Send Messages",
    usage: "messages",
    type: "Fun"  
}