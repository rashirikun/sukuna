import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'xp',
            description: "Displays User's Xp ♨",
            category: 'general',
            usage: `${client.config.prefix}xp (@tag)`,
            aliases: ['exp']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
            const n = [
            './assets/videos/Sukuna/sukuna-xp.mp4'
        ]
        let sukuna = n[Math.floor(Math.random() * n.length)]
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : 'Person'
        if (!username) {
            // const contact = this.client.getContact(user)
            // username = contact.notify || contact.vname || contact.name || user.split('@')[0]
            username = user.split('@')[0]
        }
            return void this.client.sendMessage(M.from, { url: sukuna }, MessageType.video,{
            mimetype: Mimetype.gif,
            caption: `${username}'s XP: ${(await this.client.getUser(user)).Xp || 0 \n`} 
            
          )
       }

}
