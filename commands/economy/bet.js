const { MessageEmbed } = require('discord.js');

const db = require("quick.db");
module.exports = {
    name : 'bet',
    description : 'Returns latency and API ping',

    execute: async(client, message, args) => {
    if(!args[0]) return message.reply('Please specify some amount to bet');
    
    if(isNaN(args[0])) return messagae.reply('You poor you can only bet in numbers | example: `.bet 100`');
    
    const amountToBet = parseInt(args[0]);
   
  let bal = db.fetch(`money_${message.author.id}`)

  if (bal === null)
  { bal = 0;}

    if(bal < amountToBet) return message.reply('Poor guy spoted! you dont have enough money to bet💩');
    
    
      const botrun = Math.floor(Math.random() * 50) + 1
      const run = Math.floor(Math.random() * 50) + 2
     
   
    const winAmount = amountToBet * 2;
    if(botrun <= run) {
      const embed20 = new MessageEmbed()
      .setDescription(`You won ${winAmount} coins My number was : ${botrun} And your was ${run}`)
<<<<<<< HEAD
      message.channel.send({embeds: [embed20]});
=======
      message.channel.send(embed20);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
       db.add(`money_${message.author.id}`, winAmount)
      
    } else {
        const embed21 = new MessageEmbed()
        .setDescription(`Sad You lost ${amountToBet} coins better luck next time My Number was : ${botrun} and your was ${run}`)
<<<<<<< HEAD
        message.channel.send({embeds: [embed21]});
=======
        message.channel.send(embed21);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
      db.subtract(`money_${message.author.id}`, amountToBet);
      
    }
    
    }
}