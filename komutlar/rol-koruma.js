const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
let prefix = ayarlar.prefix

  if (!args[0]) {
 message.channel.send(`<a:no:935517579424981052> __**aç**__ Veya __**kapat**__ Yazmalısın ! \`t!rol-koruma aç\``)
  }
  if (args[0] === 'aç') {
    db.set(`rolk_${message.guild.id}`, "Aktif")
     message.channel.send(`**<a:yes:935517481756409857> Rol Koruma Başarıyla Açıldı.**`)
  }
   if (args[0] === 'kapat') {
    db.delete(`rolk_${message.guild.id}`)
    message.channel.send(`**<a:yes:935517481756409857> Rol Koruma Başarıyla Kapatıldı.**`)
  }
};
exports.conf = {
  aliases: ['rol-koruma'],
  permLevel: 0
};
exports.help = {
  name: 'rol-koruma'
}; 
