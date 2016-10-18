var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);

var io = require('socket.io')(server);
io.on('connection', (client) => {
	console.log('Connected: %s', client.id);
	client.on('event', function(data) {});
	client.on('disconnect', function() {});
});

console.log('Server running at http://localhost:3000');