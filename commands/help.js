module.exports = {
    name: 'help',
    description: "this command shows the commands that are available via an embed",
    execute(client, message, args, Discord){
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#800080')
        .setTitle('Help Menu')
        .setDescription('These are the commands that can be used')
        .setThumbnail('https://cdn.kurwa.club/files/V8JPK.png')
        .addFields(
            {name: 'Help', value: 'Shows this menu.'},
            {name: 'ping', value: 'this pings Issac#1616 20 times.'},
            {name: 'ba', value: 'this just says that you are an autist.'},
            {name: 'clear', value: 'Using this command will clear the amount of messages you specify. (note: it cant delete over 100 messages)'}
        )
        .setFooter('Help Menu yessir')
        message.channel.send(HelpEmbed)
    }
}