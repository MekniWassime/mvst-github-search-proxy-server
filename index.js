var express = require('express')
var cors = require('cors')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
var bodyParser = require('body-parser');

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SERCRET = process.env.CLIENT_SERCRET
const PORT = process.env.PORT | 3000

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/healthcheck', async (req, res) => {
    res.send({ "message": "healthy" })
})

app.listen(PORT, () => {
    console.log(`proxy server is listening on port ${PORT}`)
})
