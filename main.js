const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})


client.login('ODE4NjMyMTk1MjMyNzU5ODI4.YEa4pA.sCCLWA3fJ0r8XtvsPRfCkajp5o0');