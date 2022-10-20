const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
    ;
    setInterval(() => {
      const channel = client.channels.cache.get(""); // ID Channeli ke mikhay
      if (!channel) return console.error("Channeli Vojod Nadarad");
      channel.join().then(connection => {
        connection.voice.setSelfDeaf(true)
      }).catch(e => {
        
        console.error(e);
      })
    }, 30000); //Time Reconnect Shodan Yani Age Dc She Bad Masalan 30s Barmigarde Voice
  }); 

  //mik neshin and member count
client.on("ready", () => {
    function status() {

        const micneshin = client.guilds.cache.get("")  //ID beza
        const membercount = client.users.cache.size;
        const voiceChannels = micneshin.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        let go = [`${membercount} Members`, `${count} Active Mics`]
        let plsc = ["WATCHING", "WATCHING"]//STREAMING OR LISTENING OR PLAYING OR COMPETING OR WHATCHING
        let Power = Math.floor(Math.random() * go.length);
        client.user.setActivity(go[Power], { type: plsc[Power] });
    }; setInterval(status, 10000)
    client.user.setPresence({
        status: 'dnd', // online | dnd | idle | offline
    })
}); 


client.on('message', message => {
  if (message.content === `!new`) {
    const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Some title')
  .setURL('https://discord.js.org/')
  .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
  .setDescription('Some description here')
  .setThumbnail('https://i.imgur.com/wSTFkRM.png')
  .addFields(
      { name: 'Regular field title', value: 'Some value here' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true },
  )
  .addField('Inline field title', 'Some value here', true)
  .setImage('https://i.imgur.com/wSTFkRM.png')
  .setTimestamp()
  .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
  
message.channel.send(exampleEmbed);

  }
}) 


client.on("ready",() => {
  console.log(client.user.tag)
})
client.login("");