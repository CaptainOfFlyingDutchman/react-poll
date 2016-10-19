var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);

var connections = [];
var title = 'Untitled Presentation';

var io = require('socket.io')(server);
io.on('connection', (client) => {
	client.emit('welcome', {
		title: title
	});

	connections.push(client);
	console.log('Connected: %s socket. Total: %s', client.id, connections.length);

	client.on('event', function(data) {});
	
	client.on('disconnect', () => {
		connections.splice(connections.indexOf(client), 1);
		client.disconnect();
		console.log('Disconnected: %s sockets remaining.', connections.length);
	});
});

console.log('Server running at http://localhost:3000');