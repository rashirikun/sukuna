import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/Shinobu/shinobu.mp4'
        ]
        let shinobu = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: shinobu }, MessageType.video, {quoted:M.WAMessage,
        mimetype: Mimetype.gif,
        const mn=`
╭─「（＾∀＾●）ﾉｼ」
│⋊ ᴜꜱᴇʀ: *${M.sender.username}*
│⋊ ɴᴀᴍᴇ: ꜱʜɪɴᴏʙᴜ
│⋊ ᴘʀᴇꜰɪx: !
│⋊ ᴏᴡɴᴇʀ: <!mod>
╰────────────┈平和

🦋 *Fun* 🦋

🎭 bite 
🎭 bonk 
🎭 chess 
🎭 cry 
🎭 dance 
🎭 darkjoke 
🎭 fact 
🎭 happy 
🎭 highfive 
🎭 hug 
🎭 kick 
🎭 kill 
🎭 kiss 
🎭 lick 
🎭 poke 
🎭 quote 
🎭 safejoke 
🎭 ship 
🎭 smile 
🎭 trigger 
🎭 wave 
🎭 wink 
🎭 yeet

🦋 *Fun-2* 🦋

🎁 bully 
🎁 choke 
🎁 cringe 
🎁 cuddle 
🎁 eat 
🎁 fquote 
🎁 hold 
🎁 in-love-with 
🎁 pat 
🎁 punch 
🎁 scare 
🎁 slap 
🎁 slash 
🎁 sleep 
🎁 smug 
🎁 tickle 
🎁 ultrahug 
🎁 why

🦋 *General* 🦋

♨ admins 
♨ google 
♨ help 
♨ mods 
♨ profile 
♨ xp

🦋 *Media* 🦋

🎙 karaoke 
🎙 lyrics 
🎙 play 
🎙 spotify 
🎙 yta 
🎙 yts 
🎙 ytv 
🎙 screenshot

🦋 *Misc* 🦋

🎗 hi 
🎗 retrieve 
🎗 shinobu

🦋 *Moderation* 🦋

🧧 activate 
🧧 close 
🧧 deactivate 
🧧 delete 
🧧 demote 
🧧 everyone 
🧧 open 
🧧 promote 
🧧 remove

🦋 *Utils* 🦋

🎈 blur 
🎈 steal 
🎈 sticker 
🎈 subred

🦋 *Weeb* 🦋

🎑 anime-line 
🎑 genshincharacter 
🎑 husbando 
🎑 kitsune 
🎑 loli 
🎑 meguminpaper 
🎑 neko 
🎑 rpaper 
🎑 waifu

 
 ──❅┈[ ꜱʜɪɴᴏʙᴜ ʙᴏᴛ ]┈❅───

┌────────────┈❅
│   〽 ꜱʜɪɴᴏʙᴜ
│   ©️ Synthesized Infinity Botto
└────────────┈⁂
❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅

🎗 Note: Use !help <command_name> to view the command info
`
        return void this.client.sendMessage(M.from, { url: shinobu }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
