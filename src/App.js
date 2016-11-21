import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../js/store';
import {Router, Route, hashHistory} from 'react-router';

//import components
import Homepage from '../js/components/Homepage'

// import logo from './logo.svg';
import './App.css';

console.log('Client running in ${process.env.NODE_ENV} mode');

//Routes
const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Homepage}/>
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(routes, document.getElementId('app'));
});
