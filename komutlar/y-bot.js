const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let prefix = "t!";
  let yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(
      "<a:bots:937076118857580594>  Eğlence Menüsü  <a:bots:937076118857580594>",
      `
**t!prefix** : Botun Prefixini Değiştirirsiniz. (YAKINDA)
**t!ping** : Botun Pingine Bakarsınız.
**t!davet** : Botu Davet Edersiniz.`)
    .addField(
      "**» Davet Linki**",
      " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=934089661696053348&scope=bot&permissions=8)"
    )
    .setImage(
      "https://share.creavite.co/5ioi7jkx1sfeH6a8.gif"
    )
    .setFooter(
      `${message.author.tag} Tarafından İstendi.`,
      message.author.avatarURL()
    )
  message.channel.send(yardım);
};

exports.help = {
  name: "bot",
  category: "bot",
  description: "Bot Komutları Gösterir."
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["bot", "Bot","Bot"]
};