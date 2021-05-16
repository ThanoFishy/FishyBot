module.exports = {
    name: 'clear',
    aliases: ["cl", "del"],
    description: "this clears a certain amount of messages in the channel it was sent in",
    permissions: ["ADMINISTRATOR"],
    async execute(client, message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages you want to clear.");

        if(isNaN(args[0])) return message.reply("Enter a real number.");
        if(args[0] > 100) return message.reply("You can't delete more than 100 messages.");
        if(args[0] < 1) return message.reply("You must delete atleast 1 message.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        })
        }
}