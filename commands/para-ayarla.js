const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // eger komut bot sahibi tarafindan kullanildiysa don
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Lütfen bir kullanıcı belirtin!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Lütfen geçerli bir miktar belirtin.");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Para Güncellendi!`)
        .addField(`Kullanıcı`, `<@${data.user}>`)
        .addField(`Toplam tutar`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "para-ayarla",
    aliases: ["setbal"],
    usage: `para-ayarla @kullanici <tutar>`
}
