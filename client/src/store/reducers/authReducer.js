import * as Types from '../actions/types';

const initialState = {
	isAuthenticated: false,
	user: {},
	error: {}
}

const authReducer = (state=initialState,action) => {

	switch(action.type){

		case Types.REGISTER_USER: {

			return {
				user: action.payload.user,
				isAuthenticated: Object.keys(state.user).length === 0
			}
			
		}

		case Types.REGISTER_ERROR: {
			return {
				...state,
				error: action.payload.error
			}
		}

		default: return state;

			
	}
}

export default authReducer;