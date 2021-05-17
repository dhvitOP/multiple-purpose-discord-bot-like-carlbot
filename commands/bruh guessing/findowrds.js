const currentGames = {};
const Discord = require("discord.js");
module.exports = {
  name: "find-words",
  aliases: ["words-find", "find", "words", "fw", "findwords", "wordsfind"],
  execute: async(client, message, args) => {
if (currentGames[message.guild.id]) {
			return message.channel.send("GAME ALREADY RUNNING");
		}
		// Reads words file
		const wordList = require("../../utils/words.json");
		
		// Init some utils variables
		const participants = [],
			winners = [],
			words = [],
			nbGames = 7;

		// Store the date wich the game has started
		const createdAt = Date.now(); // 20929038303
    
		for(let i = 0; i < nbGames; i++){
			const result = Math.floor((Math.random() * wordList.length));
			words.push(wordList[result].substring(0, 3).toLowerCase());
		}

		let i = 0; // Inits i variable to count games
		currentGames[message.guild.id] = true; // Update current game variable
		generateGame.call(client, words[i]); // Generate a new round
    
		function generateGame(word){
			word = word.toLowerCase();
    
			// Launch timer
			const delay = (i === 0) ? 5000 : 0;
			if(i === 0){
				message.channel.send("GAME STARTING");
        
			}

			setTimeout(() => {
                
				// Send announcment message
				message.channel.send(`New Word: ${word}`);
      
    
				// init a collector to receive the answers
				const collector = new Discord.MessageCollector(message.channel, (m) => !m.author.bot, {
					time: 20000
				});
    
				collector.on("collect", (msg) => {
					if(!participants.includes(msg.author.id)){
						participants.push(msg.author.id);
					}
					if(msg.content.toLowerCase().indexOf(word) >= 0 && wordList.map((word) => word.toLowerCase()).indexOf(msg.content.toLowerCase()) >= 0){
						collector.stop(msg.author.id); // Stop the collector
					} else {
						return msg.channel.send(`INVALID WORD \n By: ${msg.author.toString()}`);
					}
				});
    
				collector.on("end", async (collected, reason) => {
					if(reason === "time"){
						return message.channel.send("NO WINNER FOUND");
					} else {
						message.channel.send(`This word was found by <@${reason}>`);
						winners.push(reason);
					}
					if(i < nbGames-1) {
						i++;
						generateGame.call(this, words[i]);
					} else {
						currentGames[message.guild.id] = false;
						if(winners.length < 1){
							return message.channel.send("THERE WERE MORE THAN 2 WINNERS");
						}
						const winnerID = await getWinner(winners);
						const time = createdAt;
						const user = await client.users.fetch(winnerID);
				
            message.channel.send(`Game Ended The game Stats are - \n Winner: ${user.username}\n participantCount: ${participants.length}\n participantList: ${participants.map((p) => "<@"+p+">").join("\n")}`);
					
					}
				});
			}, delay);
		}

		async function getWinner(array){
			return new Promise(function (resolve){
				const counts = {};
				let compare = 0;
				let mostFrequent;
				for(let i = 0, len = array.length; i < len; i++){
					const winner = array[i];
					if(!counts[winner]){
						counts[winner] = 1;
					} else {
						counts[winner] = counts[winner] + 1;
					}
					if(counts[winner] > compare){
						compare = counts[winner];
						mostFrequent = array[i];
					}
				}
				resolve(mostFrequent);
			});
		}
	
  }
}