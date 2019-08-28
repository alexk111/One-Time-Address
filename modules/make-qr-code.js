const qrcode = require('qrcode-generator')

function makeQRCode (dataVal) {
  const qr = qrcode(0, 'M')
  qr.addData(dataVal)
  qr.make()
  return qr.createSvgTag(5, 0)
}

module.exports = makeQRCode
