  const { getBuffer } = require('../function.js')
  const groupResponse = async (sock, update) => {
   const metadata = await sock.groupMetadata(update.id)   
   for (let participant of update.participants) {
    try{
       let metadata = await sock.groupMetadata(update.id)
       let participants = update.participants
       for (let num of participants) {
         try {
           ppuser = await sock.profilePictureUrl(num, 'image')
         } catch {
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }
         if (update.action == 'add') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Welcome👋` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
         update.id, 
         { 
         caption: `*Hello @${num.split("@")[0]} Member Baru Di ${metadata.subject}* \n\nJangan lupa berkenalan dengan admin disini\nPatuhi Rules Disini !!!*`, 
         location: { 
          jpegThumbnail: await getBuffer(ppuser) 
         }, 
         buttons: button, 
         footer: 'Ariel SP', mentions: [num] })
         } 
        else 
        if (update.action == 'remove') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Bye👋` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
           update.id, 
          { 
           caption: `*@${num.split("@")[0]} Keluar Dari Group ${metadata.subject}*\nMoga Tenang Bro, ummm...`, 
           location: { jpegThumbnail: await getBuffer(ppuser) 
          }, 
           buttons: button, 
           footer: 'Ariel SP', 
           mentions: [num] 
             }
             )
             }
            }
        } catch (err) {
        console.log(err)
      }
    }   
  }
module.exports = { groupResponse }  
