import axios from 'axios';
import { createAction } from 'redux-actions';


export const setRegisterIsSubmitting = createAction('SET_REGISTER_IS_SUBMITTING');
export const registerSucess = createAction('REGISTER_SUCESS');
export const registerError = createAction('REGISTER_ERROR');
export const setLogInIsSubmitting = createAction('SET_LOG_IN_IS_SUBMITTING');
export const logInSucess = createAction('LOG_IN_SUCESS');
export const logInError = createAction('LOG_IN_ERROR');
export const logOutSuccess = createAction('LOG_OUT_SUCESS');
export const logOutError = createAction('LOG_OUT_ERROR');


//USER- Log In
export const logIn = (username, password) => dispatch => {
	dispatch(setLogInIsSubmitting(true));

	return axios.get('http://localhost:8080/api/v1/users/' + username, {auth: { username, password } })
		.then(() => {
			console.log('success')
			dispatch(logInSucess({ username, password }));
			dispatch(setLogInIsSubmitting(false));
			return { username, password };
		})
		.catch(err => {
			console.log('error')
			dispatch(logInError(err));
			dispatch(setLogInIsSubmitting(false));
			return false;
		});
}

//USER- register
export const register = (username, password) => dispatch => {
	dispatch(setRegisterIsSubmitting(true));

	return axios.post('http://localhost:8080/api/v1/users', {username: username, password: password})
		.then(() => {
			//the user automatically logs in after registration
			dispatch(logIn(username, password));
			dispatch(setRegisterIsSubmitting(false));
			return {}
		})
		.catch(err => {
			dispatch(registerError(err));
			dispatch(setRegisterIsSubmitting(false));
			return false;
		})
}


//USER - Log out - should use a bad username and password to have a 401 back
export const logOut = (badUsername, badPassword) => dispatch => {

	return axios.get('http://localhost:8080/api/v1/users' + badUsername, {auth: { badUsername, badPassword } })
		.then(() => {
			console.log('log out')
			dispatch(logOutSuccess(true));
			return { };
		})
		.catch(err => {
			dispatch(logOutSuccess(false));
			return false;
		});
}

//USER - Edit account information

//USER - Delete account 



