const wallets = require('./modules/wallets')
const addressGenerators = require('./modules/address-generators')

// Helper for checking if your BTC wallet is generating the same addresses
const walletId = process.argv[process.argv.length - 1]
const wallet = wallets[walletId]

for (let i = 0; i < 10; i++) {
  console.log(
    `0/${i}`,
    addressGenerators[wallet.addrEnc](wallet.hdKey, i)
  )
}
