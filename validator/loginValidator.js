validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

loginValidator = (userData) => {

	let {email,password} = userData;
	let error = {};

	if(!email){
		error.email = "Please enter your email address!"
	}else{

		if(validateEmail(email)){
			if(!password){
				error.password = "Please enter your password!"
			}else if(password.length < 6){
				error.password = "Password should be at least 6 characters long!"
			}
		}else {
			error.email = "Please enter a valid email address!"
		}

	}

	return {
		error,
		isValid: Object.keys(error).length == 0
	}


}

module.exports = loginValidator;