const bitcoin = require('bitcoinjs-lib')

function p2pkh (hdKey, idx) {
  return bitcoin.payments.p2pkh({
    pubkey: hdKey.derive(0).derive(idx).publicKey
  }).address
}

function p2wpkhInP2sh (hdKey, idx) {
  return bitcoin.payments.p2sh({
    redeem: bitcoin.payments.p2wpkh({
      pubkey: hdKey.derive(0).derive(idx).publicKey
    })
  }).address
}

function p2wpkh (hdKey, idx) {
  return bitcoin.payments.p2wpkh({
    pubkey: hdKey.derive(0).derive(idx).publicKey
  }).address
}

function multisigP2wshInP2sh (hdKey, idx) {
  // will add later
}

function multisigP2wsh (hdKey, idx) {
  // will add later
}

module.exports = {
  'p2pkh': p2pkh,
  'p2wpkh-in-p2sh': p2wpkhInP2sh,
  'p2wpkh': p2wpkh
  // 'multisig-p2wsh-in-p2sh': multisigP2wshInP2sh,
  // 'multisig-p2wsh': multisigP2wsh
}
