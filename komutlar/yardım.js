const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Paradox Guard yardım paneli`)
.setDescription(`


:white_small_square: **=**  \`!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`!küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`!reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
:white_small_square: **=**  \`!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
:white_small_square: **=**  \`!istatistik\`:  **Botun İstatistiklerini Atar**
:white_small_square: **=**  \`!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`!ping\`:  **Pinginizi Ölçüp Atar**
:white_small_square: **=**  \`!avatar\`:  **Avatarınızı Atar**

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardımg",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};