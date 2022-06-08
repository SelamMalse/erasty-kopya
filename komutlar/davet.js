const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setTitle("Erasty Davet Linki")
  .setColor("GOLD")
    .addField("**<a:gold:922885629359050772>  Botun Sahibi**", "<@!803959818330701875>")
    .addField("**<a:linkk:935265180416368670>  Destek Sunucusu Tıkla!**", " [Sunucumuza Katıl](https://discord.gg/5jDQs6fvgk)", )
    .addField("**<a:linkk:935265180416368670>  Davet Linki Tıkla!**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=934089661696053348&scope=bot&permissions=8)", )
  .addField("**<a:linkk:935265180416368670>  Wep Sitesi Tıkla!**", " [Web Sitesi](https://vivid-cumbersome-clove.glitch.me)", )
    .setImage("https://share.creavite.co/5ioi7jkx1sfeH6a8.gif")
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  message.channel.send(chrome);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["davet", "DAVET","Davet",'davetet','DAVETET','Davet-et','DAVET-ET']
};
