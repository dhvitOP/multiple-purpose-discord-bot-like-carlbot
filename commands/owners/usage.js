const { MessageEmbed } = require('discord.js')

const child = require ('child_process')

module.exports = {
    name: 'usage',
    description: 'only owners can use so its point less to know the usage of this command xD',
    aliases: [],
    
    execute: async(client, message, args) => {
      if(message.author.id == '780029934163722280' || message.author.id == '720632216236851260') 
      {
          
      const DynoxHost = require('dynoxhost.js');
const dh = new DynoxHost('taCv6UuBNMV6VVPFmJVEsraQ2ebgGD8b4UyN94nM4cUdZ160');
          const usage = dh.getUsage('21895ae5');
message.channel.send(`${usage}`);
          dh.getUsage('21895ae5').then(console.log);
          
      
      }
      }
      }