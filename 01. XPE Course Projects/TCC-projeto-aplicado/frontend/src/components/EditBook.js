// EditBook.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters

const EditBook = () => {
	const { id } = useParams(); // Access the 'id' URL parameter
	const [book, setBook] = useState({
		titulo: '',
		ano_de_lancamento: '',
		quantidade_em_estoque: '',
		disciplina: '',
	});

	useEffect(() => {
		const fetchBook = async () => {
			try {
				const response = await fetch(`http://localhost:4000/getBook/${id}`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const bookData = await response.json();
				setBook(bookData);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchBook();
	}, [id]); // Use 'id' from useParams as the dependency

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`http://localhost:4000/updateBook/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(book),
			});
			if (response.ok) {
				console.log('Book updated successfully');
			} else {
				console.error('Failed to update book.');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setBook({
			...book,
			[name]: value,
		});
	};

	return (
		<div>
			<h2 style={{ marginLeft: '10px' }}>Edit Book</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label style={{ marginLeft: '10px' }}>Title:</label>
					<input style={{ marginLeft: '10px' }}
						type="text"
						className="form-control"
						name="titulo"
						value={book.titulo}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<label style={{ marginLeft: '10px' }}>Release Year:</label>
					<input style={{ marginLeft: '10px' }}
						type="text"
						className="form-control"
						name="ano_de_lancamento"
						value={book.ano_de_lancamento}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<label style={{ marginLeft: '10px' }}>Stock Quantity:</label>
					<input style={{ marginLeft: '10px' }}
						type="text"
						className="form-control"
						name="quantidade_em_estoque"
						value={book.quantidade_em_estoque}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<label style={{ marginLeft: '10px' }}>Discipline:</label>
					<input style={{ marginLeft: '10px' }}
						type="text"
						className="form-control"
						name="disciplina"
						value={book.disciplina}
						onChange={handleInputChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary" style={{ marginLeft: '10px' }}>
					Update Book
				</button>
			</form>
		</div>
	);
};

export default EditBook;
