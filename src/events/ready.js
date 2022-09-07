const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    let activities = [ `Developed by iaS#0001`, `${client.user.username}` ], i = 0;
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Streaming, url: "https://twitch.tv/enterprise"}), 22000);
}};
