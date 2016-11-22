import axios from 'axios';
import { createAction } from 'redux-actions';

export const sendMessageSuccess = createAction('SEND_MESSAGE_SUCCESS');
export const sendMessageError = createAction('SEND_MESSAGE_ERROR');


//MESSAGE- get message log
export const messageLog = (username, password) => dispatch => {

	return axios.get('hhttp://localhost:8080/api/v1/messages/', {auth: { username, password } })
		.then(() => {
			return { messages };
		})
		.catch(err => {
			return false;
		});
}

//MESSAGE- send
export const sendMessage = (username, password, to, text) => dispatch => {

	return axios.post('http://localhost:8080/api/v1/users', {auth: {username: username, password: password}}, {to: to, text: text})
		.then(() => {
			//the user automatically logs in after registration
			return {}
		})
		.catch(err => {
			return false;
		})
}



