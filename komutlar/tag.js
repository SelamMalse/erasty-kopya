const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
   if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Sahibime.')
  .addField('İşte Sahibim',"FrozeN ✓#4681")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/779780476071575574/782329055117836328/31.gif').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setColor('#f6ff00').setTitle('Bir hata oldu!').setDescription(`• \`s*tag\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

if(!args[0])  return message.channel.send(new Discord.MessageEmbed()
.setColor('#f6ff00')
.setTitle('Bir hata oldu!')
.setDescription(`${message.author} Bir **TAG** veya **SIMGE** koymayı unuttunuz. **ÖRNEK : ★**`));
if(args[0] === 'kapat') {
db.delete(`tag.${message.guild.id}`);
return message.channel.send(new Discord.MessageEmbed()
.setTitle('İşte bu kadar!')
.setColor('#f6ff00')
.setDescription('Mesaj tag sistemi başarıyla kapatıldı.'));
} else {
db.set(`tag.${message.guild.id}`, args.slice(0).join(' '));
return message.channel.send(new Discord.MessageEmbed()
.setTitle('İşte bu kadar!')
.setColor('#f6ff00')
.setDescription(`Mesaj tag sistemini başarıyla \`${args.slice(0).join(' ')}\` olarak seçtiniz.`));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'tag'
};