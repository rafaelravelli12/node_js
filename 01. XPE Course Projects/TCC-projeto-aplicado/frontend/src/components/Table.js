import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const Table = () => {
	const tableStyle = {
		borderCollapse: 'collapse',
		width: '90%',
		marginLeft: '20px',
		marginRight: '20px',
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

	const [data, setData] = useState([]); // State to store the fetched data

	const fetchData = async () => { // Function to fetch data from the backend API
		try {
			const response = await fetch('http://localhost:4000/getBooks');
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const books = await response.json();
			setData(books);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	useEffect(() => {// Use the useEffect hook to fetch data when the component mounts
		fetchData();
	}, []); // The empty array [] as the second argument ensures this runs only once when the component mounts

	return (
		<div>
			<h2 style={{ textAlign: 'center' }}>Acervo Biblioteca - Escola AVANÇO</h2>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={thStyle}>ID</th>
						<th style={thStyle}>Título</th>
						<th style={thStyle}>Ano de Lançamento</th>
						<th style={thStyle}>Quantidade disponível</th>
						<th style={thStyle}>Disciplina</th>
						<th style={thStyle}>Ações</th>
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
								<Link to={`/edit/${item.id}`}>Edit</Link>
								<br></br>
								<Link to={`/delete/${item.id}`}>Delete</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
