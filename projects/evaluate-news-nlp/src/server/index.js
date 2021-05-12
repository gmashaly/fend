var path = require('path')
var Request = require("request");
const express = require('express')
const bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

app.use(express.static('dist'))



console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/sentimentAnalysis', function (req, res) {
    console.log(req.body)
    Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://api.meaningcloud.com/sentiment-2.1",
    "body": JSON.stringify({
        "key": process.env.API_KEY,
        "url": req.body.txt,
        "lang": "en"
    }),
    redirect: 'follow'
    }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        res.send(JSON.parse(body))
    });
    
})

app.get("/test", async (req, res) => {
    res.json({ message: "pass!" });
  });

module.exports = app

