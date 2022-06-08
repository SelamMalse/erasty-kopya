const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix 
exports.run = async (client ,message, args) =>{
if (!args[0]) return message.channel.send(new MessageEmbed().setDescription(` <a:no:935517579424981052>  __**aç**__ veya  __**kapat**__  Yazmalısın ! \`t!küfürengel aç\``));
if(args[0] === 'aç') {
if(db.has(`kufur_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(` <a:no:935517579424981052>  **Küfür Engel Zaten Ayarlı.**`));
db.set(`kufur_${message.guild.id}`, "acik")
message.channel.send(new MessageEmbed().setDescription(` <a:yes:935517481756409857> **Küfür Engel Başarıyla Açıldı.**`));
return
}
if (args[0] === 'kapat') {
if(!db.has(`kufur_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(` <a:no:935517579424981052>  **Küfür Engel Zaten Ayarlı Değil.**`));
db.delete(`kufur_${message.guild.id}`)
message.channel.send(new MessageEmbed().setDescription(` <a:yes:935517481756409857> **Küfür Engel Başarıyla Kapatıldı !**`));
return
}
  message.channel.send('')
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür', 'küfür-engel'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-ayarla',
 description: '',
 usage: ''
};