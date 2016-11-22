import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux';
import store from './js/store';

// import App from './App';
import Homepage from './js/components/Homepage';

import './index.css';

//routes
const routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Homepage} />
		</Router>
	</Provider>
);


document.addEventListener(
	'DOMContentLoaded',
	function() {
		ReactDOM.render(
			routes, document.getElementById('root')
		);
	}
);