const { EmbedBuilder, PermissionsBitField, Color } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const config = require("../../config")
const db = require("quick.db");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("premium-kod-oluştur")
    .setDescription("Premium kodu oluşturursunuz.")
    .addStringOption(option => option.setName('kod').setDescription('Premium olarak kullanılıcak kod.').setRequired(true)),
    run: async (client, interaction) => {
    
    const code = interaction.options.getString('kod');
        
    if(interaction.user.id !== config.owner) { return interaction.reply({embeds: [
          new EmbedBuilder()
          .setColor(0xFC4949)
          .setDescription("Bu komutu sadece yapımcılarım kullanabilir!")
      ]})}
        
     db.set(`premium_code_${code}`, true)
       
     await interaction.reply({ embeds: [
       new EmbedBuilder()
        .setDescription("Kod başarıyla oluşturuldu!")
        .setColor(0x5868f2)
        .setTimestamp()
    ]})
                
   await interaction.followUp({ ephemeral: true, content: `Premium Kodunuz : ${code}` })     
        
    try {
    await client.channels.cache.get(config.log).send({ embeds: [
        new EmbedBuilder()
        .setTitle("Bir Premium Kodu Oluşturuldu!")
        .addFields({ name: 'Kodu Oluşturan', value: `${interaction.user.tag} | ${interaction.user.tag}` })
        .addFields({ name: 'Oluşturuşan Kod', value: `${code}` })
        .addFields({ name: 'Kodun Oluşturulduğu Sunucu', value: `${interaction.guild.name} | ${interaction.guild.id}` })
        .setColor(0x5868f2)
        .setTimestamp()
    ]})
    } catch {
        console.log("Premium kanal logu ayarlanmamış!")
    }

   }
}