const discord = require('discord.js')
const ayarlar = require("../ayarlar.json")
const db = require('quick.db');

exports.run = async(client, message, args) => {
  let davetlerim = await db.fetch(`davet_${message.author.id}_${message.guild.id}`)
  var user = message.mentions.users.first() || message.author;

const embed = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setColor('#f6ff00')
.setDescription(`Toplam Davet Sayın : **${davetlerim ? davetlerim : "0"}**`)
.setThumbnail("")
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(embed) 

}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['davetlerim','Davetsayım','davetsayım','DAVETSAYIM','DAVETLERİM'],
  permlevel: 0
}
exports.help = {
  name: 'davetlerim'
}