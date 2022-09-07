const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require("quick.db")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("premium-komut")
    .setDescription("Pong!"),
    run: async (client, interaction) => {
        
const premium = db.fetch(`premium_${interaction.user.id}`);
    if(!premium) return interaction.reply({embeds: [
          new EmbedBuilder()
          .setColor(0xFC4949)
          .setDescription("Bu komutu kullanabilmek için premium üyesi olman gerek!")
      ]});
        
      interaction.reply(`Pong 🏓`)
    }
 };
