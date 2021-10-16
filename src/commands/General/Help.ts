import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'

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

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
            const n = [
            './assets/videos/Shinobua/shinobu.mp4'
        ]
        let shinobu = n[Math.floor(Math.random() * n.length)]
        if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category || info.config.category === 'dev') continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
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
        return void this.client.sendMessage(M.from, { url: shinobu }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
    const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `🚀 *Command:* ${this.client.util.capitalize(command.config?.command)}\n📉 *Status:* ${
                state ? 'Disabled' : 'Available'
            }\n⛩ *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
                command.config.aliases
                    ? `\n♦️ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
                    : ''
            }\n🎐 *Group Only:* ${this.client.util.capitalize(
                JSON.stringify(!command.config.dm ?? true)
            )}\n💎 *Usage:* ${command.config?.usage || ''}\n\n📒 *Description:* ${command.config?.description || ''}`
        )
    }
    
    emojis = ['🈷️', '🈹️', '🈯️', '☮', '🈳️', '🈵️', '🈂️', '㊗️', '🈁️']
}
