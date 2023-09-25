// AddBook.js

import React, { useState } from 'react';

const AddBook = () => {
	const [titulo, setTitulo] = useState('');
	const [ano_de_lancamento, setAnoDeLancamento] = useState('');
	const [quantidade_em_estoque, setQuantidadeEmEstoque] = useState('');
	const [disciplina, setDisciplina] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:4000/addBook', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					titulo: titulo || null,
					ano_de_lancamento: ano_de_lancamento || null,
					quantidade_em_estoque: quantidade_em_estoque || null,
					disciplina: disciplina || null,
				}),
			});
			if (response.ok) {
				console.log('Book added successfully');
			} else {
				console.error('Failed to add book.');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div>
			<h2 style={{ marginLeft: '10px' }}>Add Book</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label style={{ marginLeft: '10px' }}>Title:</label>
					<input style={{ marginLeft: '10px' }}
						type="text"
						className="form-control"
						value={titulo}
						onChange={(e) => setTitulo(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label style={{ marginLeft: '10px' }}>Release Year:</label>
					<input style={{ marginLeft: '10px' }}
						type="text"
						className="form-control"
						value={ano_de_lancamento}
						onChange={(e) => setAnoDeLancamento(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label style={{ marginLeft: '10px' }}>Stock Quantity:</label>
					<input style={{ marginLeft: '10px' }}
						type="text"
						className="form-control"
						value={quantidade_em_estoque}
						onChange={(e) => setQuantidadeEmEstoque(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label style={{ marginLeft: '10px' }}>Discipline:</label>
					<input style={{ marginLeft: '10px' }}
						type="text"
						className="form-control"
						value={disciplina}
						onChange={(e) => setDisciplina(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary" style={{ marginLeft: '10px' }}>
					Add Book
				</button>
			</form>
		</div>
	);
};

export default AddBook;
