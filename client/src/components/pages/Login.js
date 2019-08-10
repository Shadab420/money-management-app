import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends Component{

	state = {
		email: '',
		password: '',
		error: {}
	}

	Login(){
		this.formSubmitHandler = this.formSubmitHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler = event => {

		this.setState({
			[event.target.name]: event.target.value
		})
	}

	formSubmitHandler = event => {
		alert("hi");
	}

	render(){

		let { email, password } = this.state;

		return (

			<Row>
				<Col md = {{ span: 4, offset: 4}}>
					<Form onSubmit={this.formSubmitHandler}>
						
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" name="email" placeholder="email@email.com" value={email} onChange={this.changeHandler}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" name="password" value={password} onChange={this.changeHandler}/>
						</Form.Group>

						Don't have an account?<Link to="/register">Register here!</Link>

						<Button variant="primary" type="submit" style={{display: 'block'}}>
							Login
						</Button>
					</Form>
				</Col>
			</Row>

		)

	}
}

export default Login;