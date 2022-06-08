const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "t!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("<a:sirenn:936293461462777916>  Uyarı Menüsü  <a:sirenn:936293461462777916>",`
**t!uyarı ekle @Kişi (Sebep)** : Belirttiğiniz Kişiye Uyarı Ekler.
**t!uyarı sil @Kişi (Adet)** : Belirttiğiniz Kişinin Uyarısını Siler.
**t!uyarı bilgi @Kişi** : Belirttiğiniz Kişinin Uyarısını Siler.
`)
  .addField("**<a:linkk:935265180416368670> Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=934089661696053348&scope=bot&permissions=8)", )
    .setImage("https://share.creavite.co/5ioi7jkx1sfeH6a8.gif")
    .setFooter(`${message.author.tag} Tarafından İstendi.`,message.author.avatarURL())
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["uyarı-yardım"],
  permLevel: 0
};

exports.help = {
  name: "uyarı-yardım",
  category: "moderasyon",
  description: "Eğlence Komutları Gösterir."
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["uyarı-yardım","UYARI-YARDIM","Uyarı-yardım"]
};

