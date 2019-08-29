const initWallets = require('./modules/wallets')

// Helper for getting stats on how many addresses have been already used (next address index)
async function main () {
  const wallets = await initWallets()
  const walletId = process.argv[process.argv.length - 1]
  const wallet = wallets[walletId]
  console.log(wallet.nextAddrIdx)
}

main()
