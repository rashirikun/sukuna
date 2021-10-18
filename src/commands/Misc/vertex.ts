import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'vertex',
            description: 'Displays the info.',
            aliases: ['vx'],
            category: 'misc',
            usage: `${client.config.prefix}vertex`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Shinobu/shinobu-vertex.mp4'
        ]
        let shinobu = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: shinobu }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `🦋 ꜱʜɪɴᴏʙᴜ\n\n well...` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
