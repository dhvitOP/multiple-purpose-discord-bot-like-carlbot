const currentGames = {};
const Discord = require("discord.js"),
md5 = require("md5");
module.exports = {
  name: "love-calc",
  aliases: ["calc-love", "lovecalc", "calclove"],
  execute: async(client, message, args) => {
	const firstMember = message.mentions.members.filter(m => m.id !== message.author.id).first();
		if (!firstMember)
			return message.channel.send("MISSING MEMBER");
		const secondMember =
			message.mentions.members
				.filter(m => m.id !== firstMember.id)
				.filter(m => m.id !== message.author.id)
				.first() || message.member;
		if (!secondMember)
			return message.error("MISSING MEMBER");

		const members = [firstMember, secondMember].sort(
			(a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)
		);
		const hash = md5(
			`${members[0].id}${members[1].user.username}${members[0].user.username}${members[1].id}`
		);

		const string = hash
			.split("")
			.filter(e => !isNaN(e))
			.join("");
		const percent = parseInt(string.substr(0, 2), 10);

		const embed = new Discord.MessageEmbed()
			.setAuthor("❤️ LoveCalc")
			.setDescription(`${firstMember.user.username} Loves ${secondMember.user.username} ${percent}% `)
			.setColor("RED")
	    .setFooter("This how They Both Love Each Other And also Made For Each Other (Please Dont Take This Seriously)")
      .setThumbnail("https://cdn.discordapp.com/emojis/819410218382917662.gif?v=1")

		message.channel.send(embed);


  }
}