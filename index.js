const
    express = require('express'),
    app = express(),
    http = require('http').createServer(app)

app.use(express.static(__dirname + '/public'))  

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

http.listen(3000, () => console.log('Example app listening on port 3000!'))
