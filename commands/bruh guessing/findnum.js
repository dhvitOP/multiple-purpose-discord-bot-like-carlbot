const currentGames = {};
const Discord = require("discord.js");
module.exports = {
  name: "guess-number",
  aliases: ["number", "number-guess", "numbers-guess", "guess-numbers", "numbers-find", "find-numbers"],
  execute: async(client, message, args) => {
if (currentGames[message.guild.id]) {
			return message.channel.send("There is a game already running");
		}

		const participants = [];
		const number = Math.floor(Math.random() * 500) + 1;

		await message.channel.send("GAME STARTED\n Hint: The Number is Between 1-500");

		// Store the date wich the game has started
		const gameCreatedAt = Date.now();

		const collector = new Discord.MessageCollector(
			message.channel,
			m => !m.author.bot,
			{
				time: 480000 // 8 minutes
			}
		);
		currentGames[message.guild.id] = true;

		collector.on("collect", async msg => {
			if (!participants.includes(msg.author.id)) {
				participants.push(msg.author.id);
			}

			// if it's not a number, return
			if (isNaN(msg.content)) {
				return;
			}

			const parsedNumber = parseInt(msg.content);
      	const parsedNumber1 = parseInt(msg.content, 10);
  

			if (parsedNumber === number) {

						message.channel.send(`${msg.author.toString()} WON the Game`);
        message.channel.send(`Game Stats - \n Winner: ${msg.author.toString()} \n The Number was: ${number} \n Participants Count: ${participants.length} \n Participants: ${participants.map(p => `<@${p}>`).join(",")}`);
		
		
				collector.stop(msg.author.username);
			}
      if(participants.length >= 10)
      {
        return;
      }
			if (parseInt(msg.content) < number) {
				message.channel.send(`Your Number ${parsedNumber} is Smaller ${msg.author.toString()}`);
			}
			if (parseInt(msg.content) > number) {
				message.channel.send(`Your Number ${parsedNumber} is Bigger ${msg.author.toString()}`);
			}
		});

		collector.on("end", (_collected, reason) => {
			delete currentGames[message.guild.id];
			if (reason === "time") {
				return message.channel.send(`You are Defeated by ME And the Number was: ${number}`);
			}
		});
  }
}