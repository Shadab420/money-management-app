const registerValidator = require('../validator/registerValidator'); 

// login controller.
module.exports = {

	register(req,res){
		//get user input
		let userData = req.body;

		//validate user input
		let validate = registerValidator(userData);
		
		if(validate.isValid){

			//duplicate user check.
			res.status(200).json({
				message: "ok!"
			})
		}
		else{
			res.status(400).json(validate.error);
		}

		

		//new user object

		//save user object to db.
	},

	login(req,res){
		let name = req.body.name;
		let email = req.body.email;

		res.json({
			message: `Welcome ${name}! We will contact you through ${email}`
		})
	}
}