const addressGenerators = require('./address-generators')

function makeAddressGenerator (wallet) {
  return function generateAddress () {
    const newAddr = addressGenerators[wallet.addrEnc](wallet.hdKey, wallet.nextAddrIdx)
    ++wallet.nextAddrIdx
    wallet.streamAddrs.write(newAddr + '\n')
    return newAddr
  }
}

module.exports = makeAddressGenerator
