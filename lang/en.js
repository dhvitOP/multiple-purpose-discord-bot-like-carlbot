const config = require("../config.js")

module.exports = {
announce: {
  err: "No message was Given",
  suggest: "You can also change the color by doing .embed <color> Like RED"
},
ban: {
perms: "I dont have have perms",
user: "You didnt Give me A member to ban",
reason: "No Reason Given",
msg: "Banned this user"
},
embed: {
  lmao: "No color Given lmao?",
  msg: "Ok done now changed color embed of"
},
    start: {
      perms: ":warning: You dont have the `manage messages` permission to use this command or the :",
      channel: ":warning: PLs mention a text channel.",
      duration: ":warning: Please indicate the duration of the giveaway. Arguments available `s` for seconds, `m` for minutes, `h` hourly and `d` for the days. Example `10m`.",
      argswinners: ":warning: Please indicate the number of winners. Example `1` for one winner or `2` for two winners.",
      prize: ":warning: You didnt indicate prize",
      good: ":tada: I launched the giveaway in this channel :",

      giveaway: "**GIVEAWAY** 🎁",
      giveawayEnded: "**GIVEAWAY FINISHED** 🎁",

      timeRemaining: "Remaining time : **{duration}** !", 
      inviteToParticipate: (message) => `Click on ${config.reaction} to participate !`,
      winMessage: (message) => `${config.reaction} Congratulations, {winners} !! Prize Won : **{prize}** !`,
      embedFooter: "Giveaway",
      noWinner: "Giveaway cancelled, not enough participants.",
      hostedBy: "Hosted By : {user}",
      winners: "winner(s)",
      endedAt: "Finished",
    },
  
    units: {
      seconds: "second(s)",
      minutes: "minute(s)",
      hours: "hour(s)",
      days: "day(s)",
    },

    help: {
      title: "Help panel",
      description: "Find the list of my orders on this panel, obligatory arguments `<>`.",

      start: (message) => `**${config.prefix}start**`,
      startdescription: (message) => `This command is used to launch a giveaway.\nUsage \`${config.prefix}start <#salon> <time> <winners> <lot>\`.`,

      end: (message) => `**${config.prefix}end**`,
      enddescription: (message) => `This command is used to delete a giveaway.\nUsage \`${config.prefix}end <ID giveaway>\`.`,

      reroll: (message) => `**${config.prefix}reroll**`,
      rerolldescription: (message) => `This command is used to restart a giveaway.\nUsage \`${config.prefix}reroll <ID giveaway>\`.`,

      edit: (message) => `**${config.prefix}edit**`,
      editdescription: (message) => `This command is used to modify a giveaway.\nUsage \`${config.prefix}edit <ID giveaway> <winners> <new lot>\`.`,

      lang: (message) => `**${config.prefix}lang**`,
      langdescription: (message) => `This command is used to change the language of the bot.\nUsage \`${config.prefix}lang <fr/en>\`.`,

      set: (message) => `**${config.prefix}set**`,
      setdescription: (message) => `This command is used to modify the bot's configurations.\nUsage \`${config.prefix}set <mention/logs/role>\`.`,
    
      invite: (message) => `**${config.prefix}invite**`,
      invitedescription: (message) => `This command is used to get the bot's invitation link.\nUsage \`${config.prefix}invite\`.`
    },

    end: {
      perms: ":warning: You lack the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      err: ":warning: I couldn't find anything for this giveaway :",
      errmod: ":warning: An error occurred, maybe this giveaway is already finished or deleted ?",
      good: ":hourglass_flowing_sand: I'm deleting this contest in :"
    },

    reroll: {
      perms: ":warning: You lack the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      err: ":warning: I couldn't find anything for this giveaway :",
      good: ":tada: New winner(s) : {winners} ! Congratulations !",
      parts: ":warning: There weren't enough participants for this giveaway i can't choose."
    },

    edit: {
      perms: ":warning: You lack the `manage messages` permission to use this command or the :",
      msg: ":warning: Please enter a giveaway ID.",
      argswinners: ":warning: Please indicate the number of winners. Example `1` for one winner or `2` for two winners.",
      prize: ":warning: Please indicate the prize to be won. Example `a nitro`.",
      err: ":warning: I couldn't find anything for this giveaway :",
      good: ":tada: I'm in the process of modifying the giveaway with the new parameters. The changes will take effect in 5 seconds.",
      errmod: ":warning: An error occurred, maybe this giveaway is already finished or deleted ?"
    },

    lang: {
      perms: ":warning: You lack the `manage messages` permission to use this command.",
      msg: ":warning: Please indicate a language to be defined `fr` french and `en` english.",
      err: ":warning: The chosen language is already the one active on this server. Try another one to see ?"
    },

    set: {
      perms: ":warning: You lack the `manage messages` permission to use this command.",
      msg: ":warning: Please indicate a function to be defined `mention` to mention the entire server if a giveaway is running, `logs` to define a room with the giveaway logs, and `role` choose a role so that users who have it can launch giveaways without having permission to manage messages.",
      args: ":warning: Please indicate a function `on` to activate or `off` to disable.",
      erroff: ":warning: This function is already disabled. Try turning it on to see ?",
      erron: ":warning: This function is already activated. Try turning it off to see ?",
      mon: ":dividers: I have activated the function `everyone` for the next giveaways.",
      moff: ":dividers: I've disabled the function `everyone` for the next giveaways.",
      channel: ":warning: Please point me to a text chat room, `#chat` to define the logs.",
      chon: ":dividers: I set up the giveaways logs on the show :",
      role: ":warning: Please indicate a role for me, `@role` to define a role.",
      ron: ":dividers: I defined the alternative role with :",
    },

    logs: {
      raddtitle: "New member",
      raddmsg1: "The member",
      raddmsg2: "just joined the giveaway",
      rremtitle: "Former participant",
      rremmsg1: "The member",
      rremmsg2: "just canceled his entry in the giveaway",
    },

    invite: {
      title: "Invite me",
      text: "How can you invite me ?",
      description: "If you want to invite me on your server just click",
      text2: "Join my server",
      server: "If you want to join my server just click",
      clickhere: "here"
    }
};