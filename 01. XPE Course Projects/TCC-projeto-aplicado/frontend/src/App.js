// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import React Router

import Table from './components/Table';
import AddBook from './components/AddBook';
// import EditBook from './components/EditBook'; // Import the EditBook component with correct casing

function App() {
	return (
		<Router>
			<div className="App">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/add">Add Book</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Table />} />
					<Route path="/add" element={<AddBook />} />
					{/* <Route path="/edit/:id" element={<EditBook />} /> Route for editing books */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
