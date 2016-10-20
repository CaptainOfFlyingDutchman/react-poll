import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';

import Audience from './components/Audience';
import Board from './components/Board';
import Speaker from './components/Speaker';

import NotFound from './components/NotFound';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Audience} />
			<Route path="board" component={Board} />
			<Route path="speaker" component={Speaker} />

			<Route path="*" component={NotFound} />
		</Route>
	</Router>
	);

render(routes, document.getElementById('react-container'));