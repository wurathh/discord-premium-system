const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const moment = require('moment')
moment.locale("tr")
const db = require("croxydb");

module.exports = {
data: new SlashCommandBuilder()
.setName("premium-kod-kullan")
.setDescription("Premium kod kullanırsınız.")
.addStringOption(option => option.setName('kod').setDescription('Premium olarak kullanılıcak kod.').setRequired(true)),

run: async (client, interaction) => {

const code = interaction.options.getString('kod');

try{
db.set(`premium_${interaction.user.id}`, true)

await interaction.reply({ embeds: [
new EmbedBuilder()
.setDescription("Siz başarıyla premium oldunuz!")
.setColor("Green")
.setTimestamp()
]
}).then(() =>
setTimeout(
() => interaction.deleteReply(),
30000
)
)

} catch {
interaction.reply({embeds: [
new EmbedBuilder()
.setColor("Green")
.setDescription("Premium Kodunuz Hatalı, Tekrar Deneyin!")
]
}).then(() =>
setTimeout(
() => interaction.deleteReply(),
30000
)
)
}

try {
await client.channels.cache.get(config.log).send({ embeds: [
new EmbedBuilder()
.setTitle("Bir Kullanıcı Premium Oldu!")
.addFields({ name: 'Premium Olan Kişi', value: `${interaction.user.tag} | ${interaction.user.id}` })
.addFields({ name: 'Kullanılan Kod', value: `${code}` })
.addFields({ name: 'Oluşturma Tarihi', value: `${moment().format("D.MMMM.YYYY dddd HH:mm")}`})
.addFields({ name: 'Sunucu', value: `${interaction.guild.name} | ${interaction.guild.id}` })
.setColor("Green")
.setTimestamp()
]})
} catch {
console.log("Premium kanal logu ayarlanmamış!")
}

db.delete(`premium_code_${code}`)

}
};
