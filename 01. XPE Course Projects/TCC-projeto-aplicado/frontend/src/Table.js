import React, { useState } from 'react';
import Modal from 'react-modal'; // Import react-modal



const Table = () => {
	// Sample data for the table
	const data = [
		{ id: 1, titulo: 'Book 1', ano_de_lancamento: 2020, quantidade_em_estoque: 10, disciplina: 'Science' },
		{ id: 2, titulo: 'Book 2', ano_de_lancamento: 2019, quantidade_em_estoque: 15, disciplina: 'History' },
		{ id: 3, titulo: 'Book 3', ano_de_lancamento: 2022, quantidade_em_estoque: 5, disciplina: 'Math' },
	];

	// Define inline styles
	const tableStyle = {
		borderCollapse: 'collapse',
		width: '90%',
		marginLeft: '20px', // Add left margin to the table
		marginRight: '20px', // Add right margin to the table
	};

	const thStyle = {
		backgroundColor: '#f2f2f2',
		borderBottom: '1px solid #dddddd',
		textAlign: 'left',
		padding: '8px',
	};

	const tdStyle = {
		borderBottom: '1px solid #dddddd',
		textAlign: 'left',
		padding: '8px',
	};

	const buttonStyle = {
		marginTop: '20px', // Add margin to the top of the button
	};

	const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<div>
			<h2>Table Example</h2>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={thStyle}>ID</th>
						<th style={thStyle}>Title</th>
						<th style={thStyle}>Release Year</th>
						<th style={thStyle}>Stock Quantity</th>
						<th style={thStyle}>Discipline</th>
						<th style={thStyle}>Actions</th> {/* Add Actions header */}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.id}>
							<td style={tdStyle}>{item.id}</td>
							<td style={tdStyle}>{item.titulo}</td>
							<td style={tdStyle}>{item.ano_de_lancamento}</td>
							<td style={tdStyle}>{item.quantidade_em_estoque}</td>
							<td style={tdStyle}>{item.disciplina}</td>
							<td style={tdStyle}>
								<button>Edit</button> {/* Edit button */}
								<button>Delete</button> {/* Delete button */}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button style={buttonStyle} onClick={openModal}>
				Adicionar Livro
			</button>

			{/* Modal */}
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel="Adicionar Livro Modal"
			>
				<h2>Adicionar Livro</h2>
				{/* Add insertable information inputs and form elements here */}
				<button onClick={closeModal}>Close Modal</button>
			</Modal>
		</div>
	);
};

export default Table;
