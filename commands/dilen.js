exports.execute = async (client, message, args) => {
    let users = [
        "Enes Batur",
        "Orkun Işıtmak",
        "Kafalar",
        "Elraenn"
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`Defol git! ${beg.time.seconds} saniye sonra geri gel`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Defol git! Kendine İş Bul`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** size **${beg.amount}** TL verdi  💸. Artık **${beg.after}** TL var.`);
};

exports.help = {
    name: "dilen",
    aliases: [],
    usage: "dilen"
}
