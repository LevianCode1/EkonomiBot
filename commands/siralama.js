const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
   
    let leaderboard = client.eco.leaderboard({ limit: 15, raw: false });
    if (!leaderboard || leaderboard.length < 1) return message.channel.send("❌ | Boş Liderlik Tablosu!");
    const embed = new MessageEmbed()
        .setAuthor(`${message.guild.name} Sunucusunun Lider Tablosu!`, message.guild.iconURL)
        .setColor("RANDOM")
        .setThumbnail(client.users.cache.get(leaderboard[0].id) ? client.users.cache.get(leaderboard[0].id).displayAvatarURL : "https://cdn.discordapp.com/attachments/915695083335065680/921883298345680926/Baslksz-1.png")
        .setTimestamp();
    leaderboard.forEach(u => {
        embed.addField(`${u.position}. ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "Levian#0186"}`, `${u.money} 💸`);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "sıralama",
    aliases: ["sl"],
    usage: `sıralama`
}
