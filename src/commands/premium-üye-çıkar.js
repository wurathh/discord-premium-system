const { EmbedBuilder, PermissionsBitField, Color } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const config = require("../../config")
const db = require("quick.db");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("premium-kullanıcı-çıkar")
    .setDescription("Premium kullanıcıyı üyelikten çıkarırsınız.")
    .addStringOption(option => option.setName('id').setDescription('Üyelikten silinecek kullanıcın idsi.').setRequired(true)),
    run: async (client, interaction) => {
    
    const code = interaction.options.getString('id');
    const wurathh = client.users.cache.get(code);
        
    if(interaction.user.id !== config.owner) { return interaction.reply({embeds: [
          new EmbedBuilder()
          .setColor(0xFC4949)
          .setDescription("Bu komutu sadece yapımcılarım kullanabilir!")
      ]})}
        
     try{
     db.delete(`premium_${interaction.user.id}`)
       
     await interaction.reply({ embeds: [
       new EmbedBuilder()
        .setDescription("Kullanıcı başarıyla premium üyelikten çıkarıldı!")
        .setColor(0x5868f2)
        .setTimestamp()
    ]})     
       
     } catch {
         interaction.reply({embeds: [
          new EmbedBuilder()
          .setColor(0xFC4949)
          .setDescription("Böyle bir kullanıcı bulunamadı!")
      ]}); 
     }
        try { 
        client.channels.cache.get(config.log).send({ embeds: [
        new EmbedBuilder()
        .setTitle("Bir Premium Kullanıcı Çıkarıldı!")
        .addFields({ name: 'Çıkaran Kişi', value: `${interaction.user.tag} | ${interaction.user.id}` })
        .addFields({ name: 'Çıkarılan Kişi', value: `${wurathh.tag} | ${wurathh.id}` })
        .addFields({ name: 'Sunucu', value: `${interaction.guild.name} | ${interaction.guild.id}` })
        .setColor(0x5868f2)
        .setTimestamp()
    ]})
        } catch {
            console.log("Premium log kanalı girilmemiş!")
        }
   
   }
}