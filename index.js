const path = require('path')
const express = require('express')

const hbs = require('hbs')
hbs.registerPartials(path.join(__dirname, '/views/partials'))

const app = express()
app.set('view engine', 'hbs')

app.use('', express.static('static'))

app.get('/widget/:walletId', (req, res) => {
  try {
    const walletId = req.params.walletId || ''
    const walletData = {}
    res.render('pages/widget.hbs', {
      walletId,
      walletData
    })
  } catch (e) {
    res.status(500).render('pages/error.hbs')
  }
})

app.get('/json/:walletId', (req, res) => {
  try {
    const walletId = req.params.walletId || ''
    const walletData = {}
    res.json({ address: '1234567890', walletId })
  } catch (e) {
    res.status(500).json({ error: true })
  }
})

app.get('/:walletId', (req, res) => {
  try {
    const walletId = req.params.walletId || ''
    const walletData = {}
    res.render('pages/index.hbs', {
      walletId,
      walletData
    })
  } catch (e) {
    res.status(500).render('pages/error.hbs')
  }
})

const SERVER_PORT = process.env.SERVER_PORT || 4000
const SERVER_HOST = process.env.SERVER_HOST || 'localhost'

app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`*** I'm listening on ${SERVER_HOST}:${SERVER_PORT} ***`)
})
