import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `*Nyari sc? Silahkan klik tombol dibawah ini*\nJangan lupa untuk memberi credit kepada owner🤓`
conn.sendHydrated(m.chat, str, wm, pepe, 'Script bot tidak untuk disebar 😎🙏/', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)
}
handler.command = ['sc']

export default handler