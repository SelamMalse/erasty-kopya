const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {

  
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
        
 if(!args[0])  return message.channel.send(new Discord.MessageEmbed()
.setColor('#f6ff00')
.setDescription(`**<a:no:935517579424981052> Sayı ve Kanal Belirmeisin !** \`t!sayaç ayarla sayı #kanal\``))

  
  if(!args[0])  return message.channel.send(new Discord.MessageEmbed()
.setColor('#f6ff00')
.setDescription(`**<a:no:935517579424981052> Sayı ve Kanal Belirmeisin !** \`t!sayaç ayarla sayı #kanal\``))

  
  if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(`**<a:no:935517579424981052> Sayaç Ayarlı Değil**`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`<a:yes:922884969943162971> **Sayaç Başarıyla Sıfırlandı.**`)
    return
  }
  
        if(args[0] <= message.guild.members.size) {
                message.channel.send(`<a:no:935517579424981052> **Sunucudaki kullanıcı sayısından (${message.guild.members.size}) daha yüksek bir değer girmelisin !**`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.id)
  
  message.channel.send(`**Sayaç** \`${args[0]}\` \n**Sayaç kanalı ${sayackanal} olarak ayarlandı.**`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac','SAYAÇ','Sayaç'],
        permLevel: 3
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}