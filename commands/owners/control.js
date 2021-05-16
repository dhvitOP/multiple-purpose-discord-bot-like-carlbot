const { MessageEmbed } = require('discord.js')

const child = require ('child_process')

module.exports = {
    name: 'control',
    description: 'only owners can use so its point less to know the usage of this command xD',
    aliases: ['controlbot', 'cb'],
    
    execute: async(client, message, args) => {
      if(message.author.id == '780029934163722280' || message.author.id == '720632216236851260') 
      {
          if(!args[0])
              {
                  return message.channel.send(`Pls give me something to do`)
              }
      const DynoxHost = require('dynoxhost.js');
const dh = new DynoxHost('taCv6UuBNMV6VVPFmJVEsraQ2ebgGD8b4UyN94nM4cUdZ160');
message.channel.send(`Done The bot is now ${args[0]}`)
dh.setPowerState('21895ae5', `${args[0]}`)
          
      
      }
      }
      }