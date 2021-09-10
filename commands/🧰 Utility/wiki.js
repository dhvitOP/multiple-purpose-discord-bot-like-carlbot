const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "wiki",
  cooldown: 8000,
  category: "info", 
  uimage:'',
  usage: "`wiki <query>`",
  description: "Returns the article from Wikipedia",
  execute: async (client, message, args) => {
    
    const body = await fetch(

      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        args.join(" ")
      )}`

    ).then(res => res.json().catch(() => {}));

    if (!body)

      return message.channel.sendmessage.channel.send({

        embed: {

          color: "RANDOM",

          title: "❌ Error Page Not Found."

        }

      });

    if (body.title && body.title === "Not found.")

      return message.channel.send({

        embed: {

          color: "RANDOM",

          title: "❌ Error Page Not Found."

        }

      });

    const embed = new Discord.MessageEmbed()

      .setTitle(`🌐 ${body.title} `)

      .addField(

        "More Info: ",

        `**[Click Here!](${body.content_urls.desktop.page})**`,

        true

      )

      .setDescription(`** ${body.extract}**`)

      .setColor(`RANDOM`)
			.setFooter(`Dumb Bot WikiPedia Support`)

      .setTimestamp();

    if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);

<<<<<<< HEAD
    message.channel.send({embeds: [embed]});
=======
    message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76

  }

};
