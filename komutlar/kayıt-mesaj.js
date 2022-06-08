const discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
  let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new discord.MessageEmbed()
 
 if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('> **Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın! **')
	

if (args[0] === 'sıfırla') {
  let kayıtsohbet = db.fetch(`kayıtsohbet_${message.guild.id}`)
  if (!kayıtsohbet) return message.channel.send(`<a:yes:922884969943162971> **Sohbete Yazı Ayarlanmadığı İçin Sıfırlanamaz !**`)
  message.channel.send(`<a:yes:922884969943162971> **Sohbet Kanalı Başarıyla Sıfırlandı !**`)
  db.delete(`kayıtsohbet_${message.guild.id}`)
  return;
}

  if (args[0] === 'ayarla') {
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(`<a:no:750777134548516874> **Sohbet Kanalını Belirtmelisin!** `)

db.set(`kayıtsohbet_${message.guild.id}`, kanal.id)

message.channel.send(`<a:yes:922884969943162971> **Birisi Kayıt Olunca Hoşgeldin Mesajını ${kanal}'a Atacağım !**`)
  }
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['kayıt-mesajı','kayıt-msg','KAYIT-MESAJ','KAYITMESAJI','kayıtmesajı','kayıtmsg'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-mesaj'
}