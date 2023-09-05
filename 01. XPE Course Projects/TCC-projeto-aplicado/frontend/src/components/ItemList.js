import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemList() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		// Fetch the list of books from your backend when the component mounts
		axios.get('http://127.0.0.1:3000/getBooks')  // Replace with your backend URL
			.then((response) => {
				setBooks(response.data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}, []);

	return (
		<div>
			<h1>Book List</h1>
			<table>
				{/* Table headers */}
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Year</th>
						{/* Add more columns here */}
					</tr>
				</thead>
				{/* Table body */}
				<tbody>
					{books.map((book) => (
						<tr key={book.id}>
							<td>{book.id}</td>
							<td>{book.titulo}</td>
							<td>{book.ano_de_lancamento}</td>
							{/* Add more columns here */}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ItemList;
