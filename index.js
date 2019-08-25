const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('This will show a standalone Donation page. ?w=WALLETID')
})

app.get('/next-address.json', (req, res) => {
  res.send('This is for getting a next Bitcoin address in JSON. ?w=WALLETID')
})

app.get('/widget', (req, res) => {
  res.send('This will show Widget page for embedding via IFrame. ?w=WALLETID')
})

const SERVER_PORT = process.env.SERVER_PORT || 4000
const SERVER_HOST = process.env.SERVER_HOST || 'localhost'

app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`*** I'm listening on ${SERVER_HOST}:${SERVER_PORT} ***`)
})
