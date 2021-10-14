import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'features',
            description: 'Displays the info.',
            category: 'misc',
            usage: `${client.config.prefix}shinobu`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Shinobu/shinobu-features.mp4'
        ]
        let shinobu = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: shinobu }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `🦋 ꜱʜɪɴᴏʙᴜ\n\n⚜ *Features* : 
|Media| usage |

|Lyrics| Gives you the lyrics of the given song|
|Play| Plays the given title|
|Spotify|  Downloads songs from Spotify| 
|YouTube video |Downloads video from YouTube| 
|YouTube audio| Downloads audio from YouTube|
|YouTube search| Searches the given title from YouTube| 

|General| usage |

|Admins| Tags all the admins in a given group|
|Help| Displays all the available commands of bot in the group|
|Mods| Displays the moderator's contact info|
|Profile| Displays a generated profile of the tagged/mentioned user|
|Xp| Views the tagged user's xp|

|Fun| usage|

|Triggered| Tag a photo while commanding, given image would be triggered xD|
|Chess| Launches a game of chess straight in the group chat, YES THIS IS THE FUTURE! EMBRACE IT!|

|Misc| usage|

|Hi| WELL|
|Shinobu| Views info :v|
|Retrieve| Retrieve viewOnceMessage WhatsApp Message|

|Moderation| usage|

|Activate| Activates certain bot features in a group chat|
|Deactivate| Deactivates certain bot features in a group chat|
|Delete| Deletes the quoted message, admin only feature|
|Everyone| Tags all participants of the given group|
|Promote| Promotes the tagged user as a admin on group chat, can be executed only if the one commanding is group admin|
|Demote| Demotes the tagged user as a standard participant from an admin if he's one. Can work only when commanding user is himself a group admin|
|Remove| Removes the tagged user from the group, can only work if the bot is an admin and the one commanding this tool|

|Utils| usage|

|Blur| Blurs the tagged image or the pfp of the user's commanding it|
|Sticker| Converts the given gif/image into a webp sticker|
|Subred| A random subreddit post based on the specified search would be fetched. (Sometimes nsfw posts can too be fetched so be careful)|
|Steal| Steals the given sticker (This command is under development)|

|Weeb| usage|

|Kitsune| Sends you random kitsune image|
|Loli| Sends you random anime loli image|
|Megumin-paper| Sends you random Megumin (From Konosuba) image|
|Neko| Sends you random anime neko image|
|Rpaper| Sends you random anime wallpaper|
|Shinobu-paper| Sends you random Shinobu Oshino (From Bakemonogatari) image|
|Waifu| Sends you random anime waifu image|

|Dev| usage|

Disable: Disables the specified bot command from being used in a group chat.

Enable: Enables the specified bot command so that it can be used again in a group chat.

Google: Searches the given title in google.

Ban: Bans the given user from using the bot.

Unban: Unbans the given user, after this he/she can use the bot again. \n\n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
