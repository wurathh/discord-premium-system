const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("normal-komut")
    .setDescription("Pong!"),
    run: async (client, interaction) => {
      interaction.reply(`Pong 🏓`)
    }
 };
