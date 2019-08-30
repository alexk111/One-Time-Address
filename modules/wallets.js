const path = require('path')
const fs = require('fs')
const bitcoin = require('bitcoinjs-lib')

const parseXPub = require('./parse-xpub')
const dirAddresses = require('./dirs').dirAddresses
const addressGenerators = require('./address-generators')
const makeAddressGenerator = require('./make-address-generator')
const calcFileLines = require('./calc-file-lines')

const wallets = require('../wallets')

async function initWallets (isMain) {
  for (let id in wallets) {
    if (wallets.hasOwnProperty(id)) {
      const wallet = wallets[id]

      // parse the provided xpub: get version bytes converted to xpub and address encoiding
      let parsedXPub
      try {
        parsedXPub = parseXPub(wallet.xpub)
        wallet.hdKey = bitcoin.bip32.fromBase58(parsedXPub.xpub)
      } catch (e) {
        throw new Error('Invalid xpub value in ' + id)
      }

      wallet.addrEnc = wallet.addrEnc || parsedXPub.addrEnc
      if (!addressGenerators[wallet.addrEnc]) {
        throw new Error(`${wallet.addrEnc} is not supported yet`)
      }

      // restore the nextAddrIdx counter from the number of already generated addresses
      const walletAddrsPath = path.join(dirAddresses, wallet.xpub)
      if (fs.existsSync(walletAddrsPath)) {
        wallet.nextAddrIdx = await calcFileLines(walletAddrsPath)
      } else {
        wallet.nextAddrIdx = 0
      }

      // if not a helper process
      if (isMain) {
        // create a write stream for storing the generated addresses: line number = address index
        try {
          wallet.streamAddrs = fs.createWriteStream(walletAddrsPath, {flags: 'a'})
        } catch (e) {
          throw new Error(`Could not create Write Stream for ${walletAddrsPath}: ${e}`)
        }

        // make a function to generate addresses
        wallet.generateAddress = makeAddressGenerator(wallet)
      }
    }
  }

  return wallets
}

module.exports = initWallets
