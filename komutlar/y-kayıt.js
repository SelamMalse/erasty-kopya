const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "t!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      "<a:dkmod:922884681714761779>  Kayıt Menüsü  <a:dkmod:922884681714761779>",
      `
**t!kayıt-mesaj** : Yazınız.
**t!kız-rol** : Yazınız
**t!kız** : Yazınız.
**t!kayıtçı-rol** : Yazınız.
**t!kayıt-kanal** : Yazınız.
**t!toplam-kayıt** : Yazınız.
**t!isim-tag** : Yazınız.
**t!otoisim** : Yazınız.
**t!kayıt-hg** : Yazınız.
**t!erkek-rol** : Yazınız.
**t!erkek** : Yazınız.
**t!alınacak-rol** : Yazınız.`)
    .addField(
      "**<a:linkk:935265180416368670> Davet Linki**",
      " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=934089661696053348&scope=bot&permissions=8)"
    )
    .setImage(
      "https://share.creavite.co/5ioi7jkx1sfeH6a8.gif"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    )
  message.channel.send(yardım);
};

exports.help = {
  name: "kayıt-yardım",
  category: "kayıt-yardım",
  description: "Eğlence Komutları Gösterir."
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["kayıt-yardım", "KAYIT-YARDIM","Kayıt-Yardım",'KAyıt-yardım','KaYIT-YARDIM','kayıt','KAYIT']
};

