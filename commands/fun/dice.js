const Discord = module.require("discord.js");

module.exports = {
  name: "dice",
  aliases: [],
  execute: async(client, message, args, data, db) => {

function dice() {
    var answers = ["1", "2", "3", "4", "5", "6"]
    return answers[Math.floor(Math.random()*answers.length)];
}
  
   var embed = new Discord.MessageEmbed()
    .setDescription(":game_die: The dice rolled " + `${dice()}` + "! :game_die:")
    .setColor("RANDOM")
  
<<<<<<< HEAD
  message.channel.send({embeds: [embed]});
=======
  message.channel.send(embed=embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76

}
}
module.exports.help = {
    name: "dice",
    description: "Roll a dice",
    usage: "dice",
    type: "Fun" 
}