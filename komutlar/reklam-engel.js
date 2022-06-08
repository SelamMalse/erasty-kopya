const db = require('quick.db')
const { Discord, MessageEmbed } = require('discord.js')
 let ayarlar = require('../ayarlar.json')
 var prefix = ayarlar.prefix
exports.run = async (bot, message, args) => {
  
if (!args[0]) return message.channel.send(new MessageEmbed().setDescription(`<a:no:935517579424981052>  __**aç**__ veya  __**kapat**__  Yazmalısın ! \`t!küfürengel aç\``));
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
 
if (args[0] == 'aç') {
if(db.has(`reklam_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(` <a:no:935517579424981052>  **Küfür Engel Zaten Ayarlı.**`));
db.set(`reklam_${message.guild.id}`, 'acik')
message.channel.send(new MessageEmbed().setDescription(`<a:yes:935517481756409857> **Reklam Engel Başarıyla Açıldı.**`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
}
if (args[0] == 'kapat') {
if(!db.has(`reklam_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`<a:no:935517579424981052>  **Küfür Engel Zaten Ayarlı Değil.**`));
db.delete(`reklam_${message.guild.id}`)
message.channel.send(new MessageEmbed().setDescription(`<a:yes:935517481756409857> **Reklam Engel Başarıyla Kapatıldı !**`));
}
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam','REKLAMENGEL','reklam-engel','Reklam-Engel'],
  permLevel: 0
};
 
exports.help = {
  name: 'reklam-engel',
  description: '',
  usage: ''
};