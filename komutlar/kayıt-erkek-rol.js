const discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
   let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new discord.MessageEmbed()
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:no:750777134548516874> **Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın !**`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setColor("#f6ff00")
.setDescription(`**<a:yes:922884969943162971> Sunucu İçi Ayarladığınız Erkek Rolü Başarıyla Sıfırlandı !**`)
message.channel.send(sıfırlandı)
db.delete(`erkekrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setColor("#f6ff00")
.setDescription(`<a:no:927552198752206879> **Ayarlayacağınız Kız Rolünü Belirtmelisin !** \`t!kız-rol @kız\``)
message.channel.send(ayarlanmadı)
}
db.set(`erkekrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setColor("#f6ff00")
.setDescription(`<a:yes:922884969943162971> **Erkek Rolü Başarıyla ${rol} Olarak Ayarlandı !**`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['erkekrol', 'erol', 'e-rol'],
  permlevel: 0
}
exports.help = {
  name: 'erkek-rol',
  description: 'erkek rolünü ayarlar',
  usage: '!erkek-rol @rol'
}