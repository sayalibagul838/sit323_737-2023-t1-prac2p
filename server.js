var express = require('express');
var bodyParser = require('body-parser');
var app = express()// set reference to variable called app from an instance of express

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


var comments = []

app.get('/comments', (req,res)=> {
    res.send(comments)
})

app.post('/comments', (req,res)=> {
    const obj = Object.assign({},req.body);
    console.log(req.body)
    comments.push(req.body)
    res.sendStatus(200)
})


var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})