// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import Redirect from react-router-dom

const Login = () => {
	const [email, setUsername] = useState(''); // Define 'username' state variable
	const [senha, setPassword] = useState(''); // Define 'password' state variable
	const [loggedIn, setLoggedIn] = useState(false);
	const navigate = useNavigate(); // Initialize the useNavigate hook


	const handleLogin = async () => {
		try {
			const response = await fetch('http://localhost:4000/loginUser', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, senha }),
			});

			if (response.status === 200) {
				const { token } = await response.json();
				localStorage.setItem('token', token);
				setLoggedIn(true);
				navigate('/');
			} else {
				console.error('Login failed');
			}
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	return (
		<div>
			<h2 style={{ marginLeft: '10px' }}>Página de Login - Escola AVANÇO</h2>
			{loggedIn ? (
				<p style={{ marginLeft: '10px' }}>You are logged in. Redirecting...</p>
			) : (
				<div>
					<input style={{ marginLeft: '10px' }}
						type="text"
						placeholder="email"
						value={email}
						onChange={(e) => setUsername(e.target.value)} // Update 'username' state
					/>
					<input style={{ marginLeft: '10px' }}
						type="password"
						placeholder="senha"
						value={senha}
						onChange={(e) => setPassword(e.target.value)} // Update 'password' state
					/>
					<button onClick={handleLogin} style={{ marginLeft: '10px' }}>Fazer Login</button>
				</div>
			)}
		</div>
	);
};

export default Login;
