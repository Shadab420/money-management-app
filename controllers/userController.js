// login controller.
module.exports = {

	register(req,res){
		//get user input
		let {name, email, password, confirmPassword} = req.body;

		//validate user input
		

		//duplicate user check.

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