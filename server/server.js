require('dotenv').config()

const express = require('express'),
        massive = require('massive'),
        bodyParser = require('body-parser'),
        ctrl = require('./controller')
        // axios = require('axios')
        


const app = express()

app.use(bodyParser.json())

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.get('/api/products', ctrl.getProducts)


app.listen(SERVER_PORT, () => {
    console.log(`It's happenin' on port ${SERVER_PORT}`)
})