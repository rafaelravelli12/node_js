import React, { useState } from 'react';
import './App.css';
import Table from './Table';

function App() {
	// Create state variables for login and password
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	// Handle changes in the login and password inputs
	const handleLoginChange = (event) => {
		setLogin(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	// Handle login form submission
	const handleLoginSubmit = (event) => {
		event.preventDefault();
		// You can perform authentication logic here
		console.log('Login:', login);
		console.log('Password:', password);
		// Reset the input fields
		setLogin('');
		setPassword('');
	};

	return (
		<div className="App">
			<div className="login-container">
				<h2>Login Page</h2>
				<form onSubmit={handleLoginSubmit}>
					<div className="form-group">
						<label htmlFor="login">Login:</label>
						<input
							type="text"
							id="login"
							name="login"
							value={login}
							onChange={handleLoginChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
							required
						/>
					</div>
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
}

export default App;
