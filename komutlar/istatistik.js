const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  

    .addField(
      "<a:Stiting:922884412406923294>  Erasty İstatistik <a:Stiting:922884412406923294>", 
      
      `> Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n>  Toplam kanal: **${
        client.channels.cache.size
      }**`
    ) 
    .addField(
      "Bot Geliştiricisi",
      `> Bot geliştiricisi : <@803959818330701875>`
    ) 
    .addField(
      "Sürümler",
      `>  Discord.js sürümü: **v${Discord.version}** \n>  Node.js sürümü: **${process.version}**`
    ) 
    
    .setTimestamp()
    .setColor("RANDOM");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["bot-istatistik","i",'İSTATİSTİK','İstatistik',]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};