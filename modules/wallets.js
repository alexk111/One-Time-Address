const bitcoin = require('bitcoinjs-lib')

const parseXPub = require('./parse-xpub')
const addressGenerators = require('./address-generators')

const wallets = require('../wallets')

for (let id in wallets) {
  if (wallets.hasOwnProperty(id)) {
    const wallet = wallets[id]
    let parsedXPub
    try {
      parsedXPub = parseXPub(wallet.xpub)
      wallet.hdKey = bitcoin.bip32.fromBase58(parsedXPub.xpub)
    } catch (e) {
      throw new Error('Invalid xpub value in ' + wallet.title)
    }

    wallet.addrEnc = wallet.addrEnc || parsedXPub.addrEnc
    if (!addressGenerators[wallet.addrEnc]) {
      throw new Error(`${wallet.addrEnc} is not supported yet`)
    }
  }
}

module.exports = wallets
