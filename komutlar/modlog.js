const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`<a:no:935517579424981052> Modlog Kanalı Zaten ayarlı değil.`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`<a:yes:935517481756409857> **ModLog Kanalı Başarıyla Sıfırlandı.**`);
  
    return
  }
  
if (!logk) return message.channel.send(`<a:no:935517579424981052> **Bir Modlog Kanalı Belirtmelisin.** \`t!modlog #kanal\` `);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`<a:yes:935517481756409857> **Mod-Log Kanalı Başarıyla ${logk} Olarak Ayarlandı.**`);
 message.react('607634966959882250')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Mod-log','Mod-Log','MOD-LOG'],
    permLevel: 2 ,//Kendi permlerinize göre ayarlayın,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};
   