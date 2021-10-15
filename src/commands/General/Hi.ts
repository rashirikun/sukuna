import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hi',
            description: 'Say hi to the bot.',
            category: 'general',
            usage: `${client.config.prefix}hi`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Shinobu/shinobu-hi.mp4'
        ]
        let shinobu = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: shinobu }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `𝑀𝑜𝓈𝒽𝒾 𝓂𝑜𝓈𝒽𝒾, 𝒟𝒶𝒾𝒿𝑜𝓊𝒷𝓊 𝒹𝑒𝓈𝓊𝓀𝒶? \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
