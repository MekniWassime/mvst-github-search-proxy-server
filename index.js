var express = require('express')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
var cors = require('cors')
var bodyParser = require('body-parser');

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const PORT = process.env.SERVER_PORT | 3000

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/healthz', async (req, res) => {
    res.status(200).send();
})

app.get('/getAccessToken', async (req, res) => {
    const code = req.query.code
    if (!code)
        return res.status(400).send({ "message": "please provide 'code' parameter" })

    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + code;
    try {
        const response = await fetch("https://github.com/login/oauth/access_token" + params, {
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        });
        const data = await response.json()
        res.json(data);
    } catch (error) {
        res.status(500).send({ "message": "Internal error" })
    }
})

app.listen(PORT, () => {
    console.log(`proxy server is listening on port ${PORT}`)
})
