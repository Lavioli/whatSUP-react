import axios from 'axios';
import { createAction } from 'redux-actions';

export const setLogInIsSubmitting = createAction('SET_LOG_IN_IS_SUBMITTING');
export const logInSucess = createAction('LOG_IN_SUCESS');
export const logInError = createAction('LOG_IN_ERROR');
export const logOut = createAction('LOG_OUT');


//USER- Log In
export const logIn = (username, password) => dispatch => {
	dispatch(setLogInIsSubmitting(true));

	return axios.get('http://localhost:8080/api/v1/users', {auth: { username, password } })
		.then(() => {
			console.log('success')
			dispatch(logInSucess({ username, password }));
			// dispatch(setLogInIsSubmitting(false));
			return { username, password };
		})
		.catch(err => {
			dispatch(logInError(err));
			console.log('error')
			dispatch(setLogInIsSubmitting(false));
			return false;
		});
}


//MESSAGES

