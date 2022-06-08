const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let kişi = message.mentions.members.first() || message.author;
  message.channel.send(`__İstediğiniz Kişinin ID Numarası:__ **${kişi.id}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['id','İD','İd','iD'],
  permlevel:0
}

exports.help = {
  name : "id",
  description:"Birisinin İD Sini Alırsınız",
  usage:"!id"
}