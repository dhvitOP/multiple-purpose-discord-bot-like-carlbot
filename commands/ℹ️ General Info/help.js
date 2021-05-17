const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "help",
  aliases: ['h', 'helppls'],
  description: "Shows all available bot commands.",
  execute: async (client, message, args) => {

    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = ".";
    }
    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];
      var commandnum = [];
      readdirSync("./commands/").forEach((dir, files) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
    
        );

        const cmds = commands.map((command) => {
        
          let file = require(`../../commands/${dir}/${command}`);
          
          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });
 
        let data = new Object();
        let data1 = new Object();
       
        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(", "),
        };

        categories.push(data);

      });

   let commandscount = "214";

      const embed = new MessageEmbed()
        .setTitle(`📬 Need help? Here are all of my commands:\n Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help ban\`.`)



        .addField("**:information_source: BOT CODE INFO**", "`dependencies`, `modules`, `servers`, `stats`, `uptime`\n\n**:information_source: GENERAL INFO**\n`djs`, `help`, `invite`, `links`, `ping`, `serverstats`, `vote`, **`privacy`**\n\n**<:dev:819420051240517663>** **OWNERS**\n`shell`, `control`, `eval`, `usage`\n\n <a:love_Triangle:842268584192376852> **Guessing Games** <a:love_Triangle:842268584192376852>\n `find-words`, `guess-number`, `lovecalc`\n\n :cake: **Birthday Commands** :cake:\n `set-birthday`, `check-birthday`\n\n **Anti Bad Words**\n `anti-badwords`")


        .addField("**:dolls: AUTOMOD**", "`anti-alt`, `antilink`, `autonick`, `auto-official-role`, `auto-official-role-disable`, `autorole`, `role-all`\n\n**<:laugh:819852535711268865> FUN**\n`afk`, `animesearch`, `ascii`, `baka`, `beep`, `dumb`, `calc`, `cattext`, `dice`, `eightball`, `flipcoin`, `fliptext`, `hack`, `iq`, `joke`, `kill`, `messages`, `poke`, `poll`, `ratewaifu`, `rps`, `sneeze`, `waifu`, `youtube`, `zalgo`\n\n **Information Of People**\n `Profile`\n\n **Biography**\n `set-bio`, `bio-reset`, `check-bio`\n\n **Custom Commands**\n `cc-create`, `cc-delete`, `cc-list`")


        .addField("**:level_slider: LEVELING**", "`rank`\n\n**<:money:835761381008736286> ECONOMY**\n`addmoney`, `balance`, `beg`, `bet`, `buy`, `daily`, `deposit`, `monthly`, `pay`, `profile`, `roulette`, `weekly`, `withdraw`, `work`\n\n**<a:cast:835758300511338516> LOGS**\n`logs-ticket`, `set-logs`, `remove-logs`\n\n**<a:giveaway:835759764934754324> GIVEAWAY**\n`edit`, `list`, `end`, `reroll`, `start`,`create`, `cancel`\n\n**<a:music:835760380512043008> MUSIC**\n`24/7`, `bassboost`, `dc`, `connect`, `lyrics`, `np`, `pause`, `play`, `queue`, `resume`, `shuffle`, `skip`, `stop`, `volume`\n\n**<a:warning:835759241674358794> REPORT**\n`suggest`, `bug-report`\n\n**<a:welcome:835761777144889364> WELCOME AND LEAVE**\n`leave`, `set-welcome`, `set-leave`, `welcome`")





        .addField("**:ticket: TICKET**", "`add`, `close`, `delete`, `new`, `open`, `remove`, `setup`\n\n**:performing_arts:REACTION ROLES**\n`reaction-role`, `reaction-role-remove`\n\n**:video_game: GAMES**\n`csgo`, `poke`, `slots`, `tictactoe`\n\n**:frame_photo: IMAGE**\n`3000yr`, `approved`, `batslap`, `beautiful`, `brazzers`, `burn`, `cat`, `challenger`, `cuddle`, `dict`, `distort`, `dog`, `ddungeon`, `facechange`, `fire`, `flatearth`, `foxgirl`, `gay`, `hug`, `kiss`, `love`, `magik`, `meme`, `qrcode`, `randomav`, `rip`, `scary`, `slap`, `triggered`, `tickle`, `tweet`, `vs`, `wanted`")


        .addField("**:tools: MODERATION**", "`announce`, `ban`, `color`, `hide`, `kick`, `lock`, `maintainence`, `nuke`, `prune`, `purge`, `say`, `sendembed`, `serverlock`, `serverunlock`, `set`, `slowmode`, `stealemoji`, `unban`, `unhide`, `unlock`, `vcid`, `voicedeafen`, `voicekick`, `voicemove`, `voicemute`, `voiceundeaf`, `voiceunmute`, `warn`, `warns`\n\n**:robot:CHATBOT**\n`remove-channel`, `set-channel`\n\n**:toolbox: UTILITY**\n`avatar`, `covid`, `id`, `members`, `roleid`, `github`, `servericon`, `serverinfo`, `time`, `info`, `weather`")

       

        .setFooter(
          `Requested by ${message.author.tag} | Total ${commandscount} Commands`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands! (Some Commands will show on help And they are working just Command is disabled in detaied help command)`)
          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField("PREFIX:", `\`${prefix}\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`${prefix}${command.name} ${command.help.usage}}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.help.description
            ? command.help.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};
