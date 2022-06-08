const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")
exports.run = async (bot, message) => {

  
    let c = message.mentions.channels.first();
    if (!c) return message.channel.send("Lütfen bir kanal etiketleyiniz!");
    db.set(`güvenlik_${message.guild.id}`, c.id);
    message.channel.send(
      `Güvenlik kanalı ${c} olarak ayarlandı!`
    );
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-kanal",
  description: "güvenlik",
  usage: "güvenlik"
};
