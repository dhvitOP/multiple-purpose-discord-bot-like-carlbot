const Discord = require('discord.js')
const db = require('quick.db')


module.exports = {
  name: "buy",
  aliases: [],
  execute: async(client, message, args) => {
 var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }
    let user = message.author;
let userpremiumdata = {
    userid: message.guild.id,
    premiumer: message.author.id,
    premiumcode: "yes"
   }
    let alreadypremium = new Discord.MessageEmbed()
.setTitle(`You're Already an premium user`)
 let checking = db.get(`premium`)
    let author = db.fetch(`money_${message.author.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("FF5757")
    .setDescription(`:cross: You need 2000 coins to purchase Bronze VIP`);


    if (args[0] == 'bronze') {
        if (author < 3500) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.author.id}`);
        db.set(`bronze_${message.author.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark:  Purchased Bronze VIP For 3500 Coins`);

        db.subtract(`money_${message.author.id}`, 3500)
        message.channel.send(Embed2)
    } else if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(`You need 600 coins to purchase some Nikes`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.author.id}`)
        db.add(`nikes_${message.author.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark:  Purchased Fresh Nikes For 600 Coins`);

        db.subtract(`money_${message.author.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(`You need 800 coins to purchase a new car you poor guy do ,beg to earn some coins`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.author.id}`)
        db.add(`car_${message.author.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark:  Purchased a New Car For 800 Coins`);

        db.subtract(`money_${message.author.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(` You need 1200 coins to purchase a Mansion`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.author.id}`)
        db.add(`house_${message.author.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Purchased a Mansion For 1200 Coins`);

        db.subtract(`money_${message.author.id}`, 1200)
        message.channel.send(Embed3)
		
	} else if(args[0] == 'list') {
	let list = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("List of all items you have to buy:")
     	.addField("Bronze", "Cost: 3500 coins")
		.addField("Nikes", "Cost: 600 coins")
		.addField("Car", "Cost: 800 coins")
		.addField("Mansion", "Cost: 1200 coins")
    .addField("7 Days Premium", "Cost: 3000 coins")
      .addField("15 Days Premium", "Cost: 6500 coins")
        .addField("30 Days Premium", "Cost: 10,000 coins")
		message.channel.send(list)
   
    
      
      
      
      } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setTitle(`Enter an item to buy, type ${prefix}buy list to show all things`)
        message.channel.send(embed3)
    }

}
}
module.exports.help = {
    name: "buy",
    description: "Buy item from shop, add a `list` arg to display all things",
    usage: "buy <item>",
    type: "Economy"  
}
