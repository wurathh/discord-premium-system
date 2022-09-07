const { EmbedBuilder, PermissionsBitField, Color } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const config = require("../../config")
const db = require("quick.db");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("premium-kod-sil")
    .setDescription("Premium kodu silersiniz.")
    .addStringOption(option => option.setName('kod').setDescription('Silinecek premium kodu.').setRequired(true)),
    run: async (client, interaction) => {
    
    const code = interaction.options.getString('kod');
        
    if(interaction.user.id !== config.owner) { return interaction.reply({embeds: [
          new EmbedBuilder()
          .setColor(0xFC4949)
          .setDescription("Bu komutu sadece yapımcılarım kullanabilir!")
      ]})}
        
    let wurathh = db.fetch(`premium_code_${code}`)
    if (!wurathh) return interaction.reply({ embeds: [
        new EmbedBuilder()
        .setDescription("Böyle bir kod bulunamadı!")
        .setColor(0x5868f2)
        .setTimestamp()
    ]})
        
     db.delete(`premium_code_${code}`)
       
     await interaction.reply({ embeds: [
       new EmbedBuilder()
        .setDescription("Kod başarıyla silindi!")
        .setColor(0x5868f2)
        .setTimestamp()
    ]})               
        
    try {
    await client.channels.cache.get(config.log).send({ embeds: [
        new EmbedBuilder()
        .setTitle("Bir Premium Kodu Silindi!")
        .addFields({ name: 'Kodu Silen', value: `${interaction.user.tag} | ${interaction.user.tag}` })
        .addFields({ name: 'Silinen Kod', value: `${code}` })
        .addFields({ name: 'Kodun Silindiği Sunucu', value: `${interaction.guild.name} | ${interaction.guild.id}` })
        .setColor(0x5868f2)
        .setTimestamp()
    ]})
    } catch {
        console.log("Premium kanal logu ayarlanmamış!")
    }

   }
}