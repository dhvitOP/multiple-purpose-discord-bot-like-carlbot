const Discord = require("discord.js");
const beautify = require("beautify")
const cnf = require('../../config.js');

module.exports = {
  name: "eval",
  aliases: ["do"],
  execute: async(client, message, args, data, db) => {
 let owners = ["720632216236851260", "780029934163722280"];
try {
        if(message.author.id == "720632216236851260" || message.author.id == "780029934163722280") {
           
            
        

        if(!args[0]) {
		    return message.channel.send({embed: {
                color: 16734039,
                description: "Please put the code to evaluate!"
            }});
        }

            if (args.join(" ").toLowerCase().includes("token")) {
            return message.channel.send({embed: {
                color: 16734039,
                description: "You can't use this (This for safetly resons)!"
            }});
            }
			
			if (args.join(" ").toLowerCase().includes("process.env")) {
            return message.channel.send({embed: {
                color: 16734039,
                description: "You can't use this (This for safetly resons)!"
            }});
            }

            const toEval = args.join(" ")
            const evaluated = eval(toEval)

            let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTimestamp()
                .setTitle("Eval")
                .addField("To evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
                .addField("Evaluated:", evaluated)
                .addField("Type of:", typeof(evaluated));

            message.channel.send(embed);
        }
}
         catch (err) {

         let embed = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("Error!")
            .setDescription("**Error Code:** *" + err + "*")
			.setFooter("Bot created by " + `${cnf.owner}`)
            .setTimestamp()
            return message.channel.send(embed);
        }
}
}

module.exports.help = {
    name: "eval",
    description: "Evaluates and runs JavaScript code",
    usage: "eval <code>",
    type: "Owner"  
}