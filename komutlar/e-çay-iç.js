const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Çay İçti!')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://images-ext-1.discordapp.net/external/JYiaThRlKzJ80pvIAKWGAzz1YTU84Y-sR17HzUWznHo/http/cdn.yemek.com/mncrop/940/625/uploads/2015/04/turkiyede-cay-kulturu22.jpg?width=374&height=250`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çayiç","cayic",'ÇAY-İÇ','ÇAY-iç','ÇAY-İÇÇ','ÇAY-İÇ','çay-iç','Çay-İç'],
  permLevel: 0
};

exports.help = {
  name: 'çay-iç',
  description: 'Çay İçer.',
  usage: 'çay-iç'
};