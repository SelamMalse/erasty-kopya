const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "t!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("<a:cark:922884412406923294>  Moderasyon Menüsü  <a:cark:922884412406923294>",`
 **t!otorol** : Otorol Ayarlarsınız.
 **t!sayaç** : Sayaç Ayarlarsınız.
 **t!mod-log** : Mod Log Kanalı Ayarlarsınız.
 **t!yavaş-mod** : Yavaş Mod Ayarlarsınız.
 **t!sa-as** : Sa As Mesajını Açar.
 **t!sil** : Belli Miktarda Mesaj Siler. (Sınırsız)
 **t!sunucu-kur** : Bot Sunucu Kurar.
 **t!oylama** : Oylama Yaparsınız.
 **t!ban** : Belirtiğiniz Kişiyi Sunucudan Yasaklar.
 **t!nuke** : Belirtiğiniz Kanalın Mesajlarını Siler.
 **t!kick** : Belirttiğiniz Kişiyi Sunucudan Atar.
 **t!mute** : Belirttiğiniz Süre Kadar Mute Atar.
 **t!büyük-harf** : Büyük Harf Kullanımını Engeller.
 **t!küfür-engel** : Kimsenin Küfür Etmesine İzin Vermez.
 **t!reklam-engel** : Kimsenin Reklam Yapmasına İzin Vermez.
 **t!id** : Etiketlediğiniz Kullanıcının İD'sini Gönderir.`)
  .addField("**<a:linkk:935265180416368670> Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=934089661696053348&scope=bot&permissions=8)", )
    .setImage("https://share.creavite.co/5ioi7jkx1sfeH6a8.gif")
    .setFooter(`${message.author.tag} Tarafından İstendi.`,message.author.avatarURL())
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  category: "moderasyon",
  description: "Eğlence Komutları Gösterir."
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["moderasyon", "MODERASYON","Moderasyon"]
};

