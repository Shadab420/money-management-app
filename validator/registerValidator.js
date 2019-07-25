
validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

registerValidator = (userData) => {

		let error = {}

		if(!userData.name){
			error.name = "Please provide your name!";
		}

		if(!userData.email){
			error.email = "Please provide your email!";
		}else if(!validateEmail(userData.email)){
			error.email = "Please provide a valid email address.";
		}

		if(!userData.password){
			error.password = "Please enter your password";
		}else if(userData.password.length < 6){
			error.password = "Password should be at least 6 characters long";
		}

		if(!userData.confirmPassword){
			error.confirmPassword = "Please enter confirm password";
		}else if(userData.password !== userData.confirmPassword){
			error.passwordMismatch = "Password didn\'t match!";
		}

		return {
			error,
			isValid: Object.keys(error).length === 0
		}
	}

module.exports = registerValidator;