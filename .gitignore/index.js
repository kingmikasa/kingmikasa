const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const storeadapter = new FileSync('store.json');
const db = low(adapter);
const storedb = low(storeadapter);
const  CLEAR_MESSAGES  =  ' ! clearMessages ';
const youtubeStream = require('youtube-audio-stream')

db.defaults({ histoires: [], xp: []}).write()

var bot = new Discord.Client();
var prefix = ("$");
var Prefix = ("<")
bot.on('ready', () => {
bot.user.setPresence({ game: { name: 'a donner les prix et les iventaire pour le rp'} });
console.log("Bot prêt Chef !");
});

bot.login('NDM5NDU3MTk0OTkyMzM2ODk2.DcUWsA.98IudhHvp2zJ9HdGGA13uKgbFqg');


    bot.on('message', message => {



if (message.content === prefix + "sakura"){
    var sakura_embed = new Discord.RichEmbed()
    .setColor('#00ffff')
    .setTitle('Inventaire de sakura')
    .setFooter("voici ton inventaire sakura")
    .addField("voici ton argent","voici ton argent sakura 200 franc")
    .addField('voici tes armures','tu na pas d armure l hiver approche')
    .addField('voici tes armes','tu na pas d armes mais ton pouvoir les remplace')
    .addField('voici tes items','tu possede une fiol de soin et de la chair de liche')
    .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
    message.channel.sendEmbed(sakura_embed);
    console.log('commande sakura demander')
}

    if (message.content === prefix + "yuma"){
    var yuma_embed = new Discord.RichEmbed()
    .setColor('#d30c0c')
    .setTitle('Inventaire de yuma')
    .setFooter("voici ton inventaire")
    .addField("voici ton argent","voici ton argent yuma 35000 franc")
    .addField('voici tes armures'," tu possede une armure arc-en-ciel et l armure des assasin")
    .addField('voici tes armes','tu possede  un coutau , couteau de boucher , couteau des assasin et attaque bisournous')
    .addField('voici tes items','tu possede un medaillon qui invoque slender et massacre a la tronceuse , 960 pierre d amelio et de sort, 4 rune de feu et 2 rune d eau')
    .addField('voici des animaux de compagnie',"tu possede une succube , un serpent , un pickachu et un elfe")
    .addField('suite de tes items',' une rune de lumiere, huit de terre , et un de vent , anneau de gullum , anneau de tp et une  cape anti-odeur')
    .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
    message.channel.sendEmbed(yuma_embed);
    console.log('commande yuma demander')

  }
   
  if (message.content === prefix + "isamu"){
        var isamu_embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de isamu ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent isamu     franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(isamu_embed);
        console.log('commande isamu demander')

    }
    
    if (message.content === prefix + "celeste"){
        var celeste_embed = new Discord.RichEmbed()
        .setColor('#638df8')
        .setTitle('Inventaire de celeste ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent celeste 800 franc")
        .addField('voici tes armures',"tu possede une armure permettant de lire les penser des animaux une armure permettant d invoquer tt se qu elle veut et parler ave ses invocation elle reduit de 80 pourcent les degats de tt genre")
        .addField('voici tes armes','tu possede 2 sceptre 1 genere des bouclier 1 pour controler la nature')
        .addField('voici tes animaux','tu possede un dragon et un chat')
        .addField('voici tes items','tu possede 2 runes de vent 1 fiol de res et nourriture pour chat')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(celeste_embed);
        console.log('commande celeste demander')

    }

    if (message.content === prefix + "shown"){
        var shown_embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent swonh 500 franc")
        .addField('voici tes armures',' tu possede une armure legendaire ')
        .addField('voici tes armes'," tu possede une eppe legendaire, bouclier qui se transforme en eppe et eppe lumiere")
        .addField('voici tes items','tu possede potion de force et de soin level 10 , 10 potion de soin level 4 , 2 potion de force level 3 , un medaillon 10 utilisation et objet de soin instant')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(shown_embed);
        console.log('commande shown  demander')

    }

    if (message.content === prefix + "rory"){
        var rory_embed = new Discord.RichEmbed()
        .setColor('#111010')
        .setTitle('Inventaire de rory')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent rory    600 franc")
        .addField('voici tes armures','tu possede une tenue de pretress et une armure legendaire')
        .addField('voici tes armes','tu possede une hallbarde')
        .addField('voici tes items','2 runes de vent')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(rory_embed);
        console.log('commande rory demander')
    }

    if (message.content === prefix + "maria"){
        var maria_embed = new Discord.RichEmbed()
        .setColor('#ba1fcc')
        .setTitle('Inventaire de maria')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent maria   princesse franc")
        .addField('voici tes armures','tu possede une robe')
        .addField('voici tes armes','tu possede aucune armes')
        .addField('voici tes items','elle possede un diademe qui la rend invisible et la change de forme ')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(maria_embed);
        console.log('commande maria demander')
    }

    if (message.content === prefix + "kagome"){
        var kagome_embed = new Discord.RichEmbed()
        .setColor('#af3c0e')
        .setTitle('Inventaire de kagome')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent kagome  100 franc")
        .addField('voici tes armures','tu possede pas d armure')
        .addField('voici tes armes','tu possede un arc et un sabre')
        .addField('voici tes items','tu possede une griffe de cerbere')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(kagome_embed);
        console.log('commande kagome demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')

    }

    if (message.content === prefix + "    "){
        var _embed = new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('Inventaire de ')
        .setFooter("voici ton inventaire ")
        .addField("voici ton argent","voici ton argent      franc")
        .addField('voici tes armures')
        .addField('voici tes armes')
        .addField('voici tes items')
        .setFooter("voici ton inventaire pour avoir plus de stuff rend toi dans les donjons ou fait des quetes")
        message.channel.sendEmbed(sakura_embed);
        console.log('commande    demander')
    }
    if (message.content === Prefix + "maison"){
        var maison_embed =  new Discord.RichEmbed()
        .setColor('#00ffff')
        .setTitle('prix des maison')
        .setFooter('voici le prix des maison')
        .addField('le prix des petites maison','village tastow : 1000 , village taham : 800 ,  village Wifeld 600 , village ucmoor 400')
        .addField('le prix des moyennes maison','village tastow : 2000 , village taham : 1600 , village Wifeld 1200, village ucmoor 800')
        .addField('le prix des grandes maison','village tastow : 4000 , village taham : 3200 , village Wifeld 2400, village ucmoor 1600')
        .addField('le prix des manoir luxueux','village tastow : 8000 , village taham : 6400 , village Wifeld 4800, village ucmoor 3200')
        .addField('le prix des manoir luxueux 2 etage','village tastow : 16000 , village taham : 12800 , village Wifeld : 9600,  village ucmoor 6400')
        .addField('le prix des manoir luxeux  3 etage','village tastow : 32000 , village taham : 25600 , village Wifeld : 20200, village ucmoor 12800')
        .setFooter("voici l argent pour les maison et manoir")
        message.channel.sendEmbed(maison_embed)
        console.log('commande maison demander')

    }

    if (message.content === Prefix + "animaux"){
    var animaux_embed = new Discord.RichEmbed()
    .setColor("#00ffff")
    .setTitle("prix des animaux")
    .setFooter("voici le prix des animaux")
    .addField("prix des animaux terrestre",'prix d un ours noir 10000 prix d un cheval 5000 , prix d un loup 2500 prix d un chien ou d un chat 1000')
    .addField('prix des animaux volant','prix d un aigle geant 20000 , prix d un aigle 10000 , prix d une chouette 5000 , prix d une hirondelle 2500 , prix d un perroquet 1000 ')
    message.channel.sendEmbed(animaux_embed)
    console.log('commande prix des animaux ')

    }

    if (message.content === Prefix + "item"){
    var item_embed =new Discord.RichEmbed()    
    .setColor('#00ffff')
    .setTitle("prix des items")
    .setFooter("voici les prix des items")
    .addField("prix des items",'prix d une charrete 2000 , prix d 1 planche de bois 50 , prix de 10 planches de bois 400 , prix d un bloc de pierre 200 , prix de 10 bloc de pierre 1600 (si on casse un bloc de pierre on obtient 4 pierre)')
    .addField("prix item suite","prix d un lingot de fer 200 , prix d un minerait de fer 100 (un lingot de fer c est deux minerait)")
    .addField("prix des items pour animaux",'prix d une volierre 2000 , niche pour loup et chien (pas ours lol n est pas rory?) 2000 , prix d une ecurie 2500 ,prix d un abri a ours(voila rory) 4000')
    .setFooter("voici les prix des items")
    message.channel.sendEmbed(item_embed)
    console.log('commande prix des item')

    }
   
    if (message.content === Prefix + "guerrier"){
    var queteg_embed = new Discord.RichEmbed()
    .setColor('00ffff')
    .setTitle('quetes guerrier')
    .setFooter('voici toutes les quetes diponible pour les guerrier')
    .addField('protection','le mj choisit la persone que le joueur doit proteger (ca peut etre un pnj jouer par ayana)cette quete faut 200 a 1000 (selon la difficulter que vous mettez)')
    .addField('defense du royaume','le mj choisit qui le joueur doit tuer ca peut etre un gang ou un simple png entre 1000 et 2000 (le prix varie avec la difficulter)')
    .setFooter("voici les quetes pour les guerries")
    message.channel.sendEmbed(queteg_embed)
    console.log('commande quete guerrier')

    }
   
    if(message .content === Prefix + "archer"){
    var quetea_embed =new Discord.RichEmbed()
     .setColor('00ffff')
     .setTitle('quetes archer')
     .setFooter('voici toutes les quetes disponible pour les archer')
     .addField('reperage','le mj choisit le lieux et les persones a explorer pas le joueur cette quete faut 200 a 1000 (selon la difficulter que vous mettez)')
     .addField('reperage plus meutre','le mj choisit comme la mission reperage mais le joeur doit en plus ramener la tete du chef en quise de preuve elle faut 1000 a 2000 (selon encore une fois la difficulter que vous mettez')
     .setFooter("voici les quetes pour les archer")
     message.channel.sendEmbed(quetea_embed)
     console.log('commande quete archer')

    }

    if(message.content === Prefix + "mage"){
    var quetem_embed = new Discord.RichEmbed()
    .setColor('00ffff')
    .setTitle('quetes pour les mages')
    .setFooter('voici toutes les quetes disponible pour les mages')
    .addField('preparation de potion de toutes sortes','le mj decide ou le joueur doi se rendre pour faire la potion cette quete ca faut entre 200 et 1000(selon la difficulter que vous mettez)')
    .addField("sauvetage d un epidemi (oui j ai mit medecin lol)",'le mj choisit le lieux et les gens toucher pas l epedemie ca faut entre 1000 et 2000(selon la difficulter que vous mettez)')
    .setFooter("voici les quetes pour les mages")
    message.channel.sendEmbed(quetem_embed)
    console.log('commande quete mage')

    }

    if(message.content === Prefix + "assasin"){
    var queteas_embed = new Discord.RichEmbed()
    .setColor('00ffff')
    .setTitle('quetes pour les assasin')
    .setFooter('voici toutes les quetes disponible pour les assasin')
    .addField('mission de reperage','le mj decide le lieux ou doit se faire le reperage le prix est de 200 a 1000 (selon la difficulter que vous mettez)')
    .addField('mission d assasasina','le mj decide qui le joueur doit tuer prix 1000 a 2000( selon la difficulter)')
    message.channel.sendEmbed(queteas_embed)
    console.log('commande quette assasin')

    }
    if (message .content === Prefix + "donjon"){
    var donjon_embed = new Discord.RichEmbed()
    .setColor("00ffff")
    .setTitle("liste des donjon")
    .setDescription("voici la liste de tout les donjon par rapport au roll")
    .addField("roll de 0 a 10","spawn au enfer")
    .addField("roll de 11 a 50","le mj decide du donjon plus le roll est proche de 50 plus la difficulter baisse")
    .addField("roll de 51 a 90","le mj decide du donjon plus le roll est proche de 90 plus la difficulter augmente")
    .addField('roll de 91 a 95',"spawn au paradis")
    .addField("roll de 96 a 100","spawn au enfer")
    .setFooter("voici la liste des donjon")
    message.channel.sendEmbed(donjon_embed)
    console.log("commande donjon demander")

    }
    if (message.content === Prefix + "commun"){
    var commun_embed = new Discord.RichEmbed()
    .setColor("00ffff")
    .setTitle("liste des loot")
    .setDescription('voici la liste des loot commun dans les donjon par rapport au roll (la diificulter on s en bat les steak')
    .addField("roll de 21a 79","200 franc obligatoire le mj decide du loot (pas trop cheat si un doute est present aller voir un un autre mj)")
    message.channel.sendEmbed(commun_embed)
    console.log("commande loot commun demander")

    }
    
    if(message.content === Prefix + "rare"){
     var rare_embed = new Discord.RichEmbed()
     .setColor("00ffff")
     .setTitle("liste des loot")
     .setDescription("voici la liste des loot rare que l onn peut recevoir dans les donjon")
     .addField('roll de 11 a 20 et 80 a 89','500 franc obligatoire le mj decide du loot (pas trop cheat quand meme si y a un doute aller voir un autre mj pour avoir son avis)')
     message.channel.sendEmbed(rare_embed)
     console.log("commande loot rare demander")

    }
     
    if(message.content === Prefix + "epique"){
    var epique_embed = new Discord.RichEmbed()
    .setColor("00ffff")
    .setTitle("voici les loot epique")
    .setDescription("voici les loot epique que l on peut recevoir dans les donjon")
    .addField("roll de 4 a 10 et 90 a 96",'le mj peut donner 10000 franc obligatoire , le mj choisit le loot (pas trop cheat si vous avez un doute aller voir un autre mj pour avoir son avis)')
    message.channel.sendEmbed(epique_embed)
    console.log("commande loot epique demander")

    }

    if(message.content === Prefix + "legendaire"){
    var legendaire_embed = new Discord.RichEmbed()
    .setColor("00ffff")
    .setTitle("voici les loot legendaire")
    .setDescription("voici tout les loot legendaire a avoir")
    .addField("roll de 0 a 3 et 97 a 100","le mj peut donner 20000 franc obligatoire , le mj choisit le loot (pas trop cheat ( rory on se calme pour les loot svp)si un doute est present aller voir les autres mj)")

    message.channel.sendEmbed(legendaire_embed)
    console.log('commande loot legendaire demander')

}

    if (message.content === Prefix + "yuma"){
    var yuma2_embed = new Discord.RichEmbed()
    .setColor('00ffff')
    .setTitle('inventaire de yuma')
    .setFooter('voici ton inventaire yuma',)
    .addField('clique sur lr lien pour l avoir','http://loot-discord.000webhostapp.com/index.php')
    .addField('pour acceder a votre inventaire','pour acceder a ton inventaire voici tes identifiant')
    message.channel.sendEmbed(yuma2_embed)
    console.log('commande site yuma')
   
    }


    if (message.content === Prefix + "yuma"){
        var yuma2_embed = new Discord.RichEmbed()
        .setColor('00ffff')
        .setTitle('inventaire de yuma')
        .setFooter('voici ton inventaire yuma',)
        .addField('clique sur lr lien pour l avoir','http://loot-discord.000webhostapp.com/index.php')
        .addField('pour acceder a votre inventaire','pour acceder a ton inventaire voici tes identifiant id 4000 mdp 303030')
        
        message.channel.sendEmbed(yuma2_embed)
        console.log('commande site yuma')


        if (message.content === Prefix + "galina"){
            var galina_embed = new Discord.RichEmbed()
            .setColor('00ffff')
            .setTitle('inventaire de galina')
            .setFooter('voici ton inventaire galina')
            .addField('clique sur le lien pour l avoir','http://loot-discord.000webhostapp.com/index.php')
            .addField('pour acceder a votre inventaire','pour acceder a ton inventaire voici tes identifiant')
            .addField('voici le nom de ta guile','tu fait partie de vivaliberta')
            message.channel.sendEmbed(galina_embed)
            console.log('commande site galina')

        }

        if (message.content === Prefix + "jess"){
            var jess2_embed = new Discord.RichEmbed()
            .setColor('00ffff')
            .setTitle('inventaire de jess')
            .setFooter('voici ton inventaire jess')
            .addField('clique sur le lien pour l avoir','http://loot-discord.000webhostapp.com/index.php')
            .addField('pour acceder a votre inventaire','pour acceder a ton inventaire voici tes identifiant')
            .addField('voici le nom de ta guilde','tu fait partie de la guilde')
            message.channel.sendEmbed(jess2_embed)
            console.log('commande site jess')

        }

        if (message.content === Prefix + "isamu"){
            var yuma2_embed = new Discord.RichEmbed()
            .setColor('00ffff')
            .setTitle('inventaire de isamu')
            .setDescription('voici ton inventaire isamu')
            .addField('clique sur le lien pour l avoir','http://loot-discord.000webhostapp.com/index.php')
            .addField('pour acceder a votre inventaire','pour acceder a ton inventaire voici tes identifiant')
            message.channel.sendEmbed(yuma2_embed)
            console.log('commande site isamu')

        }

        if(message.content === Prefix + "rory"){
            var rory2_embed = new Discord.RichEmbed()
            .setColor('00ffff')
            .setTitle('inventaire de rory')
            .setDescription('clique sur le lien pour l avoir','http://loot-discord.000webhostapp.com/index.php')
            .addField('pour acceder a votre inventaire','pour acceder a ton inventaire je te donne tes identifiant')
            message.channel.sendEmbed(rory2_embed)
            console.log('commande site rory')

        }
