const Discord = require('discord.js');

var hd = [
    "**Tura**",
    "**Yazı**"
];

 module.exports.run = async (bot, message, args) => {

   message.channel.send (message.author.toString ()  +  "Para Döndü : "+ (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazıtura",'yazı-tura','YAZI-TURA','Yazı-Tura','YAZI-tura','Yazı-Tura','yazı-TURA'],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura Oyunu.',
  usage: 'yazı-tura'
};