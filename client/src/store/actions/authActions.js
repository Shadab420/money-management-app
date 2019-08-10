import * as Types from './types';
import Axios from 'axios';

export const register = userData => dispatch => {

	Axios.post('/api/users/register', userData)
		.then(res => {
			console.log(res)
		})
		.catch(error => {
			console.log(error.message)
		})

}