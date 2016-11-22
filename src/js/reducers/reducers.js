import * as actions from '../actions/actions';


const initialState = {
	dummy_State: 'hello'
}


//if state is not true, then it sets to initialState
const whatsupReducer =(state, action) => {
	let newState;
	state = state || initialState;
	console.log(actions.logInSucess);
	switch(action.type) {
		case actions.LOG_IN_SUCCESS:
			console.log('i am in', state)
			newState = Object.assign({}, state, {dummy_State: 'logged in'});
			return newState;
		default:
			return state;
	}
}

export default whatsupReducer;