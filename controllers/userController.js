const User = require('../model/User');
const registerValidator = require('../validator/registerValidator');
const bcrypt = require('bcrypt');


module.exports = {
	// Registration controller.
	register(req,res){
		//get user input
		let {name, email, password, confirmPassword} = req.body;

		//validate user input
		let validate = registerValidator({name, email, password, confirmPassword});
		
		if(validate.isValid){

			//duplicate user check.
			User.findOne({ email: email })
				.then((user)=>{
					if(user){
						return res.status(400).json({
							message: "User already exists!"
						})
					}

					//encrypt users password
					bcrypt.hash(password, 11, (err, hash) => {

						if(err){
							return res.status(500).json({
								message: "Server error! Please try again later."
							})
						}

						//create a new user

						let newUser = new User({
							name,
							email,
							password: hash
						})

						//save the user to database
						newUser.save()
							   .then(newUser => {
							   		res.status(201).json({
							   			message: "You are registered successfully!"
							   		})
							   })
							   .catch(err =>{
							   		res.status(500).json({
							   			message: "Server error!"
							   		})
							   })

						

					})

					

				})
				.catch(error => {
					res.status(500).json({
						message: error.toString()
					})
				})
			
		}
		else{
			res.status(400).json(validate.error);
		}
	},

	// login controller.
	login(req,res){
		let name = req.body.name;
		let email = req.body.email;

		res.json({
			message: `Welcome ${name}! We will contact you through ${email}`
		})
	}
}