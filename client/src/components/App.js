import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Container from 'react-bootstrap/Container'

function App() {
  return (
  	<BrowserRouter>
  		<Container>
		    <div className="App">
		      
		      <Switch>
		      	<Route path="/" component = {Home} exact/>
		      	<Route path="/login" component = {Login} exact/>
		      	<Route path="/register" component = {Register} exact/>
		      </Switch>

		    </div>
	    </Container>
	 </BrowserRouter>
  );
}

export default App;
