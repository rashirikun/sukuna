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
        const n =  [
            './assets/videos/Sukuna/sukuna-xp.mp4'
        ]
        let sukuna = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: sukuna }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: Your Xp is `${(await this.client.getUser(user)).Xp || 0} \n\n\n`}
    }
}
