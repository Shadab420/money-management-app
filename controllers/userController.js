const User = require('../model/User');
const registerValidator = require('../validator/registerValidator');
const loginValidator = require('../validator/loginValidator');
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
		
		//get user data
		let {email, password} = req.body;

		let validate = loginValidator({email,password});

		if(validate.isValid){
			
			//checking if user exist
			User.findOne({email})
				.then(user => {

					if(user){
						//checking if the password matches
						bcrypt.compare(password, user.password, (err,res) => {

							if(err){
								return res.status(500).json({
									message: "server error!"
								})
							}

							if(!res){
								res.status(400).json({
									message: "wrong password!"
								})
							}

						})
					}else{
						return res.status(404).json({
							message: "user doesn't exist"
						})
					}
					

				})
				.catch(err=>{
					res.status(400).json({
						message: "User doesn\'t exist!"
					})
				})

		}else{
			res.status(400).json(validate.error);
		}
	}
}