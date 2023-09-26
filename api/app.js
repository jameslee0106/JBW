// 1) install node.js express.js
// 2) initialize ur files
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())

// localhost:3000/
app.get('/', function (req, res) {
  res.send('Health check -- im alive!!')
})

// localhost:3000/bookmark
app.get('/bookmark', function (req, res) {
    res.send('Health check -- im dead!!')
})

app.listen(4000, () => {
    console.log('Starting the server!!!')
}) // Starting up ur server