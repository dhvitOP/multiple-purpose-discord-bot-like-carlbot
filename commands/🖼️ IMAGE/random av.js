const { MessageEmbed } = require('discord.js')
module.exports = {
    name : "randomav",
    aliases : ["randomavatar", "rav"],
execute: async(client, message, args) => {
   var user = client.users.cache.random();
    var avatar1 = user.displayAvatarURL({ size: 4096, dynamic: true });
  if(avatar1.includes("embed/"))
  {
     var user = client.users.cache.random();
     var avatar1 = user.displayAvatarURL({ size: 4096, dynamic: true });
  }
   if(avatar1.includes("embed/"))
  {
     var user = client.users.cache.random();
       var avatar1 = user.displayAvatarURL({ size: 4096, dynamic: true });
  }
    if(avatar1.includes("embed/"))
  {
     var user = client.users.cache.random();
       var avatar1 = user.displayAvatarURL({ size: 4096, dynamic: true });
  }
   if(avatar1.includes("embed/"))
  {
     var user = client.users.cache.random();
       var avatar1 = user.displayAvatarURL({ size: 4096, dynamic: true });
  }
      const embed = new MessageEmbed()
      .setTitle('RANDOM AVATAR')
       .setFooter(`${user.tag}'s avatar  | Dont use this avatar without the Owner permission`)
      .setColor("RANDOM")
     .setImage(`${user.displayAvatarURL({ size: 4096, dynamic: true })}`)
     message.channel.send(embed)
  }
}
 module.exports.help = {
    name: "randomav",
    description: "Sends a random avatar ",
    usage: "randomav",
    type: "Image" 
}