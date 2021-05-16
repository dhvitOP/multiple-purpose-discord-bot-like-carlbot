const Discord = require("discord.js");

module.exports = {
  name: "flipcoin",
  aliases: ["coinflip"],
  execute: async(client, message, args, data, db) => {
  
  
function doanswer() {
    var answers = ["Heads", "Tails"]
    return answers[Math.floor(Math.random()*answers.length)];
}

  await message.channel.send({embed: {
        color: 3447003,
        description: "I'm get: " + doanswer(),
    }});
	
	
}
}
module.exports.help = {
    name: "flipcoin",
    description: "Flip a virtual coin",
    usage: "flipcoin",
    type: "Fun"   
}
