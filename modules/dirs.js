const fs = require('fs')

const dirAddresses = 'addresses'

if (!fs.existsSync(dirAddresses)) {
  fs.mkdirSync(dirAddresses)
}

module.exports = {
  dirAddresses
}
