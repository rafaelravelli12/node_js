// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Table from './components/Table';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import DeleteBook from './components/DeleteBook';
import Login from './components/Login';
import LogoutButton from './components/LogoutButton'; // Import the LogoutButton component

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setLoggedIn(true);
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('token');
		setLoggedIn(false); // Set loggedIn to false after logout
	};

	return (
		<Router>
			<div className="App">
				<nav>
					<ul>
						{loggedIn && (
							<>
								<li>
									<Link to="/">Dashboard</Link>
								</li>
								<li>
									<Link to="/add">Adicionar Livro</Link>
								</li>
								<li>
									<Link to="/logout" onClick={handleLogout}>Logout</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={loggedIn ? <Table /> : <Login />} />
					<Route path="/add" element={<AddBook />} />
					<Route path="/edit/:id" element={<EditBook />} />
					<Route path="/delete/:id" element={<DeleteBook />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
