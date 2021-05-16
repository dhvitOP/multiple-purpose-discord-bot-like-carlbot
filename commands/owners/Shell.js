const { MessageEmbed } = require('discord.js')

const child = require ('child_process')

module.exports = {
    name: 'shell',
    description: 'only owners can use so its point less to know the usage of this command xD',
    aliases: ['terminal', 'cmd'],
    
    execute: async(client, message, args) => {
      if(message.author.id == '780029934163722280' || message.author.id == '720632216236851260') 
      {
      
      const command = args.join(" ");
      if(!command) return message.reply('pls specific a module to install');
      
      child.exec(command, (err, res) => {
        if(err) return console.log(err);
        message.channel.send(res.slice(0, 2000), { code: 'js'});
      })
      }
    }
}