var b58 = require('bs58check')

const addressEncodingByPrefix = new Map([
  ['xpub', 'p2pkh'],
  ['ypub', 'p2wpkh-in-p2sh'],
  ['zpub', 'p2wpkh'],
  ['Ypub', 'multisig-p2wsh-in-p2sh'],
  ['Zpub', 'multisig-p2wsh']
])

function parseXPub (xpub) {
  xpub = xpub.trim()

  const prefix = xpub.substring(0, 4)
  const addrEnc = addressEncodingByPrefix.get(prefix)

  if (!addrEnc) {
    throw new Error('Invalid xpub')
  }

  // convert version bytes to xpub
  var data = b58.decode(xpub)
  data = data.slice(4)
  data = Buffer.concat([Buffer.from('0488b21e', 'hex'), data])
  return {
    xpub: b58.encode(data),
    addrEnc
  }
}

module.exports = parseXPub
