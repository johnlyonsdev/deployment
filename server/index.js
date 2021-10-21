const express = require('express')
const path = require('path')

const app = express()
// app.get('/js', function(req, res) {
//     res.sendFile(path.join(__dirname, "../index.html"))
// })
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, "styles.css"))
// })

app.use('/js', express.static(path.join(__dirname, 'public/main.js')))

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Take us to warp ${port}`))