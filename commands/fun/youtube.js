const Discord = require('discord.js');
const { YTSearcher } = require('ytsearcher');
const cnf = require('../../config.js');

const searcher = new YTSearcher(cnf.api);

    module.exports = {
  name: "youtube",
  aliases: [],
  execute: async(client, message, args, data, db) => {
  try {
    if (!args[0]) return message.channel.send({embed: {
            color: 16734039,
            description: "Please enter a word to search!"
        }})
    if(args.join(" ").includes("sex") || args.join(" ").includes("boobs") || args.join(" ").includes("booty"))
    {
      return message.reply("Please dont search NSFW Things");
    }
    let msg = await message.channel.send({embed: {
            color: 16734039,
            description: "🔎 Searching on Youtube..."
        }})
    
    searcher.search(args.join(' ')).then(info => {
      if (!info.first) {
	  let embed2 = new Discord.MessageEmbed()
      .setDescription("I couldn't find anything on Youtube with your query!")
      .setColor('FF5757');
	   return msg.edit(embed2);
        }
      let embed = new Discord.MessageEmbed()
      .setTitle("🔎 Youtube Search result:")
      .setDescription("`First result:` " + info.first.url + " - " + info.first.title + "\n \`\`\`" + info.first.description + "\`\`\`")
      .setColor('RANDOM');
      msg.edit(embed);
    });

  } catch (err) {
	return message.channel.send({embed: {
            color: 16734039,
            description: "Something went wrong... :cry:"
        }})
  }
}
    }
module.exports.help = {
    name: "youtube",
    description: "Search on youtube",
    usage: "search <word>",
    type: "Fun"  
}