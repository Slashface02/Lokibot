const { RichEmbed } = require('discord.js')
const LogFile = require('../logFiles')

class sh1 {
    constructor(bot, log) {
        this.bot = bot
        this.log = log
        this.COLORS = {
            sh: 0x68768A,
            err: 0xe74c3c
        }

        this.cmd = function(msg, args) {
            var chan = msg.channel

            if (args[1] > 0 && args[1] < 21) {
                if (args[1] == 1) {
                    this.sh1(chan)
                } else if (args[1] == 2) {
                    this.sh2(chan)
                } else if (args[1] == 3) {
                    this.sh3(chan)
                } else if (args[1] == 4) {
                    this.sh4(chan)
                } else if (args[1] == 5) {
                    this.sh5(chan)
                } else if (args[1] == 6) {
                    this.sh6(chan)
                } else if (args[1] == 7) {
                    this.sh7(chan)
                } else if (args[1] == 8) {
                    this.sh8(chan)
                } else if (args[1] == 9) {
                    this.sh9(chan)
                } else if (args[1] == 10) {
                    this.sh10(chan)
                } else if (args[1] == 11) {
                    this.sh11(chan)
                } else if (args[1] == 12) {
                    this.sh12(chan)
                } else if (args[1] == 13) {
                    this.sh13(chan)
                } else if (args[1] == 14) {
                    this.sh14(chan)
                } else if (args[1] == 15) {
                    this.sh15(chan)
                } else if (args[1] == 16) {
                    this.sh16(chan)
                } else if (args[1] == 17) {
                    this.sh17(chan)
                } else if (args[1] == 18) {
                    this.sh18(chan)
                } else if (args[1] == 19) {
                    this.sh19(chan)
                } else if (args[1] == 20) {
                    this.sh20(chan)
                }
            } else {
                this.error(chan, args[1])
            }
        }

        this.error = function(chan, text) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.err)
                .setDescription(`Level '1 - ${text}' existiert nicht!`)
            chan.send('', emb).then((m) => {
                 message = m
            })
            return message
        }

        this.sh1-1 = function(chan) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.sh)
                .setDescription('__Hochland der Geister__\n__**Stufe 1-1**__\nBelohnung: **Mambo Tierfragment**\nSpielbar: 1x\nSpielbar mit **Ritterlevel 2**\n\n')
                .addField('⠀', 'Nicht erlaubt:\n\n6 - 6 Sterne-Einheiten, fliegende Einheiten\n\n\n**Gegner:**\n\n1x Entwickelter Infantrie\n\n\n**Mögliche 3* Lösung:**\n\n1x Ork Hammereinheit\n\n1x Skelettkrieger')
                .setImage('https://cdn.discordapp.com/attachments/361867792544432129/361871226609860609/1-1.JPG')
                .setThumbnail('https://images-ext-2.discordapp.net/external/WtttNeg2RDSHm6isQwSypyIxjtETcRXazljzsCsfL4k/https/images-ext-2.discordapp.net/external/HXooYClYwsRMLErzuGFW_Q9fYLgEpmQT8T6Y8jbvFa0/https/images-ext-1.discordapp.net/external/Ya038D-O3e8KX4WpfI7AbUVskdX5ABsHVMLnMjTuna4/https/cdn.discordapp.com/attachments/358286017263828997/358676122457735179/image.jpg')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }

        this.sh1-2 = function(chan) {
            var message
            var emb = new RichEmbed()
                .setColor(this.COLORS.sh)
                .setDescription('__Hochland der Geister__\n__**Stufe 1-2**__ \nBelohnung: **7 Ehrenmünzen**\nWie oft spielbar? - 99 Mal\nSpielbar mit **Ritterlevel 2**\n\n')
                .addField('⠀', 'Nicht erlaubt:\n\n6 - 6 Sterne-Einheiten, fliegende Einheiten\n\n\n**Gegner:**\n\n1x Entwickeltes Skelett\n\n\n**Mögliche 3* Lösung:**\n\n2x Hochelfen Bogenschütze')
                .setImage('https://cdn.discordapp.com/attachments/361867792544432129/361871229726097408/1-2.JPG')
                .setThumbnail('https://images-ext-2.discordapp.net/external/HXooYClYwsRMLErzuGFW_Q9fYLgEpmQT8T6Y8jbvFa0/https/images-ext-1.discordapp.net/external/Ya038D-O3e8KX4WpfI7AbUVskdX5ABsHVMLnMjTuna4/https/cdn.discordapp.com/attachments/358286017263828997/358676122457735179/image.jpg')
            chan.send('', emb).then((m) => {
                message = m
            })
            return message
        }

        this.sh3 = function(chan) {
            
        }
        
        this.sh4 = function(chan) {

        }

        this.sh5 = function(chan) {

        }

        this.sh6 = function(chan) {

        }

        this.sh7 = function(chan) {

        }

        this.sh8 = function(chan) {

        }

        this.sh9 = function(chan) {

        }

        this.sh10 = function(chan) {

        }

        this.sh11 = function(chan) {

        }

        this.sh12 = function(chan) {

        }

        this.sh13 = function(chan) {

        }

        this.sh14 = function(chan) {

        }

        this.sh15 = function(chan) {

        }

        this.sh16 = function(chan) {

        }

        this.sh17 = function(chan) {

        }

        this.sh18 = function(chan) {

        }

        this.sh19 = function(chan) {

        }

        this.sh20 = function(chan) {

        }


    }
}

exports.sh1 = sh1
