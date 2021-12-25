const aoijs = require('aoi.js');
const bot = new aoijs.Bot({
	token: "", //Token
	prefix: ['!'] // Prefix
});

bot.onMessage();
bot.loadCommands(`./komutlar/`);

bot.command({
    name:"deneme",
    code:`UwU İyi Kodlamalar`
    })
    
