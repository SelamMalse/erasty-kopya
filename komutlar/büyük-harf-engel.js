 const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`**Bu Komutu Kullana Bilmek İçin** \`Sunucuyu Yönet\` **Yekisine Sahip Olmalısın !**`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`, 'kapali')
    message.channel.send(`**Büyük Harf Engelleme Sistemi Kapatıldı.**`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`Capslock Engelleme Sistemi Aktif`)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['büyük-harf','Büyük-Harf','BÜYÜK-HARF'],
  permLevel: 3
};
exports.help = {
  name: 'büyük-harf',
  category: 'Moderasyon komutları !',
  description: 'Büyük Harf kullanımını engeller.',
  usage: 'Büyük Harf Engel'
};