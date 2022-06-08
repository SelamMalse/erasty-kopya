let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<a:no:935517579424981052> **Bu Komutu Kullanmak İçin \`YÖNETİCİ\` Yetkisine Sahip Olmalısın !**`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`<a:no:935517579424981052> **Bir rol etiketlemen gerekmekte örnek: __${ayarlar.prefix}abone-rol @rol__**`)
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`<a:yes:935517481756409857>  **Abone rolü başarıyla "${rol}" olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["abonerol","ABONEROL","abone-rol","Abonerol","Abone-rol","Abone-Rol"]
};
exports.help = {
  name: 'abonerol'
}

exports.play = {
  kullanım: 't!abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}