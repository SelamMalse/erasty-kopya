require('discord.js')
exports.run = function(client, message, args,params) {

  if (args.length < 1) {
    return message.reply('Doğru Kullanım **t!tersyazı merhaba**')
  }
   
message.channel.send(args.join(' ').split('').reverse().join(''))
};

exports.conf = {
  aliases: ["ters",'Tersyaz','tersyaz','Ters-Yaz','Ters-yaz','TERS-YAZ','ters-YAZ'],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'ters-yaz',
  description: 'Gönderdiğiniz mesajın ters çevrilmiş halini yazar.',
  category: 'Kullanıcı',
  usage: 'ters-yaz',
};