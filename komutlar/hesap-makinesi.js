const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    let kerem = args[0]
    let theartist = args[1]
    let theartistt = args[2]
    if(!kerem) return message.channel.send("**Hangi işlem olsun? toplama/çıkarma/bölme/çarpma.**                                                               **Örnek Kullanım** : t!hesap-makinesi toplama 2 2")
    if(!theartist) return message.channel.send("1. sayıyı da yaz. Örnek Kullanım: !hesap-makinesi toplama 2 2")
    if(!theartistt) return message.channel.send("2. sayıyı da yaz. Örnek Kullanım: !hesap-makinesi toplama 2 2")

    let cikarma = theartist - theartistt
    let carpma = theartist * theartistt
    let bolme = theartist / theartistt
    
    if(kerem == "toplama") {
        let sj = parseInt(args[1])
        let sjsj = parseInt(args[2]) //toplamada theartist + theartistt yapsaydık, örneğin 90 ile 89'u toplarken, 9089 derdi sonuca. farklı bir yöntemle yaptık ve çalıştı. denedim. olmazsa kod destek her zaman.
        message.channel.send(sj + sjsj)
    }
    
    if(kerem == "çıkarma") {
        message.channel.send(cikarma)
    }
    
    if(kerem == "çarpma") {
        message.channel.send(carpma)
    }
    
    if(kerem == "bölme") {
        message.channel.send(bolme)
    } 
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["hesapla",'HESAP-MAKİNESİ','Hesap-makinesi','HESAP-MAKİNESİ'],
    permLevel: 0
  };
  
  exports.help = {
      name: 'hesap-makinesi',
    description: 'plasmic sj',
    usage: 'hesap-makinesi'
  };