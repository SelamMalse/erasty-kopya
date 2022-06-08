let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<a:no:935517579424981052> **Bu Komutu Kullanmak İçin \`YÖNETİCİ\` Yetkisine Sahip Olmalısın !**`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`<a:no:935517579424981052> **Bir kanal etiketlemen gerekmekte örnek: __${ayarlar.prefix}abone-log #kanal__**`)
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`<a:yes:935517481756409857>  **Abone Kanalı başarıyla "${log}" Olarak Ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["abonelog", "abone-log","ABONE-LOG","aboneLOG","Abone-log","Abone-Log"]
};

exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: 't!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}