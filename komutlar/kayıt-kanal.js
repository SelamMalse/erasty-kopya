const discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
let prefix = ayarlar.prefix
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new discord.MessageEmbed()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setColor("#f6ff00")
.setDescription(`<a:yes:922884969943162971> **Kayıt Olunacak Kanal Başarıyla Sıfırlandı !**`)
message.channel.send(sıfırlandı)
db.delete(`kayıtkanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setColor("#f6ff00")
.setDescription(`<a:no:750777134548516874> Kayıt Olunacak Kanalı Belirtiniz !`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setTitle(`${client.user.username}  Kayıt Kanal Ayarlama Komutu.`)
.setColor("#f6ff00")
.setDescription(`<a:yes:922884969943162971> **Kayıt Olunacak Kanal ${kanal}, Olarak Ayarlandı !**`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtkanal', 'kkanal', 'k-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-kanal',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: `kayıt-kanal #kanal`
}