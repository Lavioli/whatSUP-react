import redux from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux thunk';
import reducers from './reducers/reducers';

let store = createStore(reducers.whatsupReducer, applyMiddleware(thunk));

export default store;