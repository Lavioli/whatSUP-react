import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux';
import store from './js/store';

// import App from './App';
import Homepage from './js/components/Homepage';
import Login from './js/components/Login';
import AxiosTest from './js/components/AxiosTest';

import './index.css';

//routes
const routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Homepage} />
			<Route path="/login" component={Login} />
			<Route path="/axios" component={AxiosTest} />
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