import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'shinobu',
            description: 'Displays the info.',
            category: 'bots',
            usage: `${client.config.prefix}shinobu`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Shinobu/shinobu-git.mp4'
        ]
        let shinobu = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: shinobu }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `🦋 ꜱʜɪɴᴏʙᴜ\n\n⚜ *Description: well...\n\n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
