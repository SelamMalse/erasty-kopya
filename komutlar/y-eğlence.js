const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "t!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      "<a:Oley:939801639303397386>  Eğlence Menüsü  <a:Oley:939801639303397386>",
      `
**t!fbi** : FBİ Gelir. 
**t!atam** : Dene ve Gör Reis.
**t!vine** : Komik Paylaşımlar.
**t!yazı-tura** : Yazı Tura Oyunu.
**t!yaz** : Yazdığınız Yazıyı Bot Yazar.
**t!ters-yaz** : Mesajın Ters Halini Yazar.
**t!balık-tut** : Balık Tutarsın.
**t!aşk-ölçer** : Aşk Ölçmeni sağlar.
**t!hesap-makinesi** : Yazdığınız Rakımı Hesaplar.
**t!çay-iç** : Çay İçersiniz.
**t!öp** : İstediğiniz Kişiyi Öper NSFW.`)
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
  name: "eğlence",
  category: "eğlence",
  description: "Eğlence Komutları Gösterir."
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["eğlence", "EĞLENCE","Eğlence",'EĞlence','EğLENCE','eĞlnece']
};

