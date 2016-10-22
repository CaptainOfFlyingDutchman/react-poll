var express = require('express');
var path = require('path');

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

// Hot reloading
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
	noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
// End hot reloading

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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

	client.on('join', (payload) => {
		const newMember = {
			id: client.id,
			name: payload.name
		};
		client.emit('joined', newMember);
		console.log('Audience joined: %s', payload.name);
	});

	client.on('disconnect', () => {
		connections.splice(connections.indexOf(client), 1);
		client.disconnect();
		console.log('Disconnected: %s sockets remaining.', connections.length);
	});
});

console.log('Server running at http://localhost:3000');