const
    express = require('express'),
    app = express(),
    http = require('http').createServer(app)
    io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))  

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

io.on('connection', socket => {
    io.emit('refresh page')
})

http.listen(3000, () => console.log('Example app listening on port 3000!'))
