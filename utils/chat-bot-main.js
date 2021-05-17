  
const request = require('request-promise-native');
const {
    chat
} = require('../config.js');
const Discord = require("discord.js");
const handleTalk = async (message, args) => {
    try {
        
       
        message.channel.startTyping(true);
        const options = {
            method: 'GET',
            url: chat.url,
            qs: {
                bid: chat.bid,
                key: chat.key,
                uid: `dumb-${message.author.id}`,
                msg: message.content
            },
            json: true
        };
    
        let reply = await request(options);
        message.channel.stopTyping(true);
        if (reply) {
          const embed = new Discord.MessageEmbed()
          .setDescription(reply.cnt)
          .setColor("RANDOM")
      .setFooter("Requested by " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
      .setTimestamp()
            await message.channel.send(embed);
        }
        } catch (e) {
 
        console.log(e);
    }
}
        module.exports = {
    handleTalk
}