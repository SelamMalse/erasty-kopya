const Discord = require("discord.js");

module.exports.run = async(client,message,args) => {

if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**<a:no:935517579424981052> **Bu Komutu Kullanmak İçin \`KANALARI YÖNET\` Yetkisine Sahip Olmalısın !**");

message.channel.clone({position: message.channel.position}).then(channel => {
    channel.send(`**${message.author} ** **<a:yes:935517481756409857> Başarıyla Bu Kanal Nukelendi.** `).then(message=> {
setTimeout(() => {
          message.delete();
        }, 50000);    })
  });

message.channel.delete();

};
module.exports.conf = {
enabled: true,
guildOnly: false,
aliases:[],
permLevel: 0.
};
module.exports.help = {
name: 'nuke',
description: 'Kanalı Siler Aynı Özelliklere Sahip Kanal Açar.',
usage: '<prefix>nuke'
};