const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const path = require('path')

const router = require('./routes/routes')

app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => console.log(`Listening on port ${port}`));