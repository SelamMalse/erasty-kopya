const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('<a:balant:922885587843817484>  Kullanıcı Menüsü  <a:balant:922885587843817484>',`
**t!profil** : Kullanıcı Bilginizi Görürsünüz.
**t!avatar** : Avatarınıza Bakarsınız.
**t!afk** : AFK Olma Komutudur.
**t!istatistik** : Botun İstatistiklerine Bakarsınız.
**t!sunucu-bilgisi** : Sunucu Bilgilerine Bakarsınız.
**t!yetkilerim** : Sunucudaki Yetkinize Bakarsınız.`)
.addField("**<a:linkk:935265180416368670> Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=934089661696053348&scope=bot&permissions=8)", )
    .setImage("https://share.creavite.co/5ioi7jkx1sfeH6a8.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
    description: "Kullanıcı Komutlarını Gösterir."
};