import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../store/actions/authActions';

class Register extends Component{

	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		error: {}
	}

	Register(){
		this.formSubmitHandler = this.formSubmitHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler = event => {

		this.setState({
			[event.target.name]: event.target.value
		})
	}

	formSubmitHandler = event => {

		event.preventDefault();
		
		let {name, email, password, confirmPassword} = this.state;

		let userData = {
			name,
			email,
			password,
			confirmPassword
		}

		this.props.register(userData);
	}

	render(){

		let { name, email, password, confirmPassword } = this.state;

		return (

			<Row>
				<Col md = {{ span: 4, offset: 4}}>
					<Form onSubmit={this.formSubmitHandler}>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" name="name" placeholder="Your name" value={name} onChange={this.changeHandler}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" name="email" placeholder="email@email.com" value={email} onChange={this.changeHandler}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" name="password" value={password} onChange={this.changeHandler}/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" name="confirmPassword" value={confirmPassword} onChange={this.changeHandler}/>
						</Form.Group>

						Already have an account?<Link to="/login">Login here!</Link>

						<Button variant="primary" type="submit" style={{display: 'block'}}>
							Register
						</Button>
					</Form>
				</Col>
			</Row>

		)

	}
}

export default connect(null,{ register })( Register );