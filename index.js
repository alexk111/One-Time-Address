const path = require('path')
const express = require('express')
const hbs = require('hbs')
const requestIp = require('request-ip')

const initWallets = require('./modules/wallets')

async function main () {
  const wallets = await initWallets(true)

  hbs.registerPartials(path.join(__dirname, '/views/partials'))

  const app = express()
  app.set('view engine', 'hbs')

  app.use('', express.static('static'))

  app.get('/:walletId/widget', (req, res) => {
    try {
      const walletId = req.params.walletId || 'default'
      const wallet = wallets[walletId] || wallets['default']
      if (wallet) {
        res.render('pages/widget.hbs', {
          walletId
        })
      } else {
        res.status(404).render('pages/404.hbs')
      }
    } catch (e) {
      res.status(500).render('pages/500.hbs')
    }
  })

  app.get('/:walletId.json', [requestIp.mw()], (req, res) => {
    try {
      const walletId = req.params.walletId || 'default'
      const wallet = wallets[walletId] || wallets['default']
      const address = wallet.generateAddress(req.clientIp)
      if (wallet) {
        res.json({ address, walletId })
      } else {
        res.status(404).json({ error: true })
      }
    } catch (e) {
      res.status(500).json({ error: true })
    }
  })

  app.get('/:walletId?', (req, res) => {
    try {
      const walletId = req.params.walletId || 'default'
      const wallet = wallets[walletId] || wallets['default']
      if (wallet) {
        res.render('pages/page.hbs', {
          walletId,
          pageData: wallet.page
        })
      } else {
        res.status(404).render('pages/404.hbs')
      }
    } catch (e) {
      res.status(500).render('pages/500.hbs')
    }
  })

  const SERVER_PORT = process.env.SERVER_PORT || 4000
  const SERVER_HOST = process.env.SERVER_HOST || 'localhost'

  app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`*** I'm listening on ${SERVER_HOST}:${SERVER_PORT} ***`)
  })
}

main()
