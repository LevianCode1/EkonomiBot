const { MessageEmbed } = require("discord.js")
exports.execute = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setAuthor(`${message.author.tag} envanteri`, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`items_${message.author.id}`);
if(!x) { return message.channel.send(`Görüntülenecek Öğe Bulunamadı`); }
const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
}, {});
const result = Object.keys(arrayToObject).map(k => embed.addField(`Ad: ${k}`,`Miktar: **${arrayToObject[k]}**`, false));
  
 
  return message.channel.send(embed);
}
exports.help = {
  name: "envanter",
  aliases: ["env"],
  usage: `envanter`
}

