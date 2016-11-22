// import redux from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import whatsupReducer from './reducers/reducers';

console.log(whatsupReducer)

let store = createStore(whatsupReducer, applyMiddleware(thunk));

export default store;