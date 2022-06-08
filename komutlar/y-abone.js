const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('<a:ZilGif:935233853226901504> Abone Rol Menüsü  <a:ZilGif:935233853226901504>',`
**t!abone-yetkili-rol** : Abone Yetkilisini Seçer.
**t!abone-rol** : Vericeğiniz Rolü ayarlarsınız.
**t!abone-log** : Log mesajınn gitceği yer seçilir.
**t!abone** : Abone Rolü verme komutudur.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=931998709288427590&scope=bot)", )
    .setImage("https://share.creavite.co/5ioi7jkx1sfeH6a8.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
 message.channel.send(yardım) 
  };

exports.help = {
  name: "abone-yardım",
  category: "abone-yardım",
    description: "Eğlence Komutları Gösterir."
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["abone-yardım", "ABONE-YARDIM","Abone-Yardım","Abone-yardım,"]
};
