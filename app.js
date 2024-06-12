const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
  res.send('Hello "/" !')
})

app.get('/about', (req, res) => {
  res.send('Hello "/about" !')
})

server.listen(3000, () => {
  console.log('http://localhost:3000')
})

module.exports = app
