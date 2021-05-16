const Discord = module.require("discord.js");
const dateFormat = require('dateformat');
const fetch = require("node-fetch");

    module.exports = {
  name: "info",
  aliases: ["userinfo"],
  execute: async(client, message, args, data, db) => {
    // Get Discord Guild Member
    let member;
    if (!args.length) {
      // Display info about the calling user
      member = message.guild.member(message.author);
    }
    else {
      // Display info about the user specified by the first argument
      member = message.guild.member(message.mentions.users.first());

      // Check we were able to retrieve the member (member is undefined)
      if (!member) {
        return message.reply(
          `I couldn't find a user with the ID \`${args[0]}\``
        );
      }
    }
    // Format Permissions
    const permissions = member.permissions.toArray().map(perm => {
      return perm
        .toLowerCase()
        .replace(/_/g, " ") // Replace all underscores with spaces
        .replace(/\w\S*/g, txt => {
          // Capitalize the first letter of each word
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    });

    // Calculate Join Position
    let joinPosition;
    const members = message.guild.members.cache.array();
    members.sort((a, b) => a.joinedAt - b.joinedAt);
    for (let i = 0; i < members.length; i++) {
      if (members[i].id == message.guild.member(message.author).id)
        joinPosition = i;
    }

    // Construct Reply
    const embed = {
      embed: {
        color: 3447003,
        title: `${member.user.tag}`,
        thumbnail: {
          url: member.user.avatarURL()
        },
        description: `${member.displayName}`,
        fields: [
          {
            name: "Joined",
            value: `${member.joinedAt.toDateString()} at ${member.joinedAt.toTimeString()}`
          },
          {
            name: "Join Position",
            value: joinPosition
          },
          {
            name: "Permissions",
            value: permissions.join(", ")
          }
        ],
        timestamp: new Date(),
        footer: {
          text: `ID: ${member.id}`
        }
      }
    };

    return message.channel.send(embed);
  }

    }
module.exports.help = {
    name: "userinfo",
    description: "Gets userinfo from a mention or id",
    usage: "userinfo <mention> or <id>",
    type: "Utility" 
}