const Discord = require ("discord.js");
exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const YRNEXEMBED = new Discord.MessageEmbed()

.setColor("BLACK")
.setTitle("**Erasty  |  Yardım Menüsü**")
.setImage("https://share.creavite.co/5ioi7jkx1sfeH6a8.gif")
.setDescription(`
**<a:linkk:935265180416368670> Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/5jDQs6fvgk)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=934089661696053348&scope=bot&permissions=8)** **•** **[Web Sitesi](https://vivid-cumbersome-clove.glitch.me)**
`)


.addField('> <a:cark:922884412406923294>  t!moderasyon ','  Moderasyon Komutlarını Gösterir.')
.addField('> <a:balant:922885587843817484>  t!kullanıcı ',' Kullanıcı Komutlarını Gösterir.')
.addField('> <a:Oley:939801639303397386>  t!eğlence',' Eğlence Komutlarını Gösterir.')
.addField('> <a:bots:937076118857580594>  t!bot',' Botun Ana Komutları Gösterir.')
.addField('> <a:ZilGif:935233853226901504>  t!abone-yardım ',' Ayarlamalı Abone Sistemin Komutlarını Gösterir.')
.addField('> <a:dkmod:922884681714761779>  t!kayıt-yardım',' Kayıt Komutlarını Gösterir.')
.addField('> <a:sirenn:936293461462777916>  t!uyarı-yardım',' Uyarı Komutlarını Gösterir.')
return message.channel.send(YRNEXEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["yardım", "YARDIM","Yardım","help","Help","HELP"]
};