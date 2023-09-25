import React from 'react';

const LogoutButton = () => {
	const handleLogout = () => {
		// Implement logout logic here
		// This can include clearing user authentication tokens or session data
		// For example, you can remove a JWT token from localStorage
		localStorage.removeItem('token');
		// After logging out, you can redirect the user to the login page
		window.location.href = '/login'; // Redirect to the login page
	};

	return (
		<button onClick={handleLogout}>Logout</button>
	);
};

export default LogoutButton;