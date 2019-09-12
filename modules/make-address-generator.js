const addressGenerators = require('./address-generators')
const AddressCache = require('./address-cache')

function makeAddressGenerator (wallet) {
  // Setup Cache if needed
  let cache
  if (wallet.addrIPCacheMins && !isNaN(wallet.addrIPCacheMins)) {
    cache = new AddressCache(wallet.addrIPCacheMins)
  }

  return function generateAddress (clientIP) {
    let addr = cache ? cache.getAddress(clientIP) : ''

    if (!addr) {
      addr = addressGenerators[wallet.addrEnc](wallet.hdKey, wallet.nextAddrIdx)
      ++wallet.nextAddrIdx
      const isoDate = new Date().toISOString()
      const addrLog = `${addr};${isoDate};${clientIP}`
      wallet.streamAddrs.write(addrLog + '\n')
    }

    if (cache) {
      cache.setAddress(clientIP, addr)
    }

    return addr
  }
}

module.exports = makeAddressGenerator
