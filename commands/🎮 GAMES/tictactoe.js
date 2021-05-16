const Discord = require("discord.js");
const db = require("quick.db");

            module.exports = {
  name: "tictactoe",
  aliases: ["ttt"],
  execute: async(client, message, args) => {
 if(!message.mentions.users.first()) return message.channel.send(`Pls mention someone`)
    var mention = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if(!mention)
    {
      message.channel.send("You didnt mention anyone to play with you")
      return;
      
    }

    const { tictactoe } = require('easy-games-js')
    const tic = new tictactoe(mention, message)
    tic.init({ PROVIDE_MEMBER: "Please provide a  member", ACCEPT_CHALLENGE: "{user} Do you accept this challange? if yes than type yes in this chat", DOESNT_PLAY: "looks like {user} doesnt wanna play", WICH_SIDE: "**{user}, Which Side Do You Pick? Type \`End\` To End the game!**", GAME_OVER: "Times up!", END: "end", INACTIVITY: "game ended due to inactivity!", WINNER: "Congrats u have won {winner} ", DRAW: "Its a draw"})
        }
            }
        module.exports.help = {
    name: "tictactoe",
    description: "Will play tictactoe game with your mentioned persom",
    usage: "tictactoe <mention>",
    type: "Fun"   
}