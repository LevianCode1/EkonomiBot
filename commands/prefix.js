exports.execute = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD") && !client.config.admins.includes(message.member.id)) return message.channel.send(`Bu sunucu için önekim **${client.prefix}**.`);
    let prefix = args[0];
    if (!prefix) {
        client.db.delete(`prefix_${message.guild.id}`);
        return message.channel.send(`✅ | Bu sunucunun öneki sıfırlandı.`);
    } else {
        let setTo = client.db.set(`prefix_${message.guild.id}`, prefix);
        return message.channel.send(`✅ | Önek \`${setTo}\` olarak ayarlandı.`);
    }
}

exports.help = {
    name: "prefix",
    aliases: ["setprefix"],
    usage: `prefix`
}
