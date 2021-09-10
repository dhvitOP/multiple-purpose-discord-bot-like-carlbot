const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const Discord = require("discord.js");

module.exports = {
  name: "calc",
  aliases: ["calculate"],
  execute: async(client, message, args, data, db) => {

       if(message.guild === null)return;


    if(args.length < 1) {
	    return message.channel.send({embed: {
            color: 16734039,
            description: "You must provide a equation to be solved on the calculator! (eg. 9 + 10)"
        }}) 
    }
			
    const question = args.join(' ');

    let answer;
    if(question.indexOf('9 + 10') > -1) {
        answer = '21 (🤣 XD, You found easter-egg)';
    } else {
        try {
            answer = math.eval(question);
        } catch (err) {
          message.channel.send({embed: {
                color: 16734039,
                description: "Invalid math equation: " + `${err}`
            }});
          return;
        }
    }

  const calc = new Discord.MessageEmbed()
              .setTitle("Calculator")
              .setColor(`RANDOM`)
              .addField("Question: ", `${question}`)
              .addField("Answer: ", `${answer}`)
<<<<<<< HEAD
          message.channel.send({embeds: [calc]});
=======
          message.channel.send(calc);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
}
}
module.exports.help = {
    name: "calc",
    description: "Calculator",
    usage: "calc <task>",
    type: "Fun" 
}