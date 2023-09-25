import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters

const DeleteBook = () => {
	const { id } = useParams(); // Access the 'id' URL parameter

	const handleDelete = async () => {
		try {
			const response = await fetch(`http://localhost:4000/deleteBook/${id}`, {
				method: 'DELETE',
			});
			if (response.ok) {
				console.log('Book deleted successfully'); // You can add logic to redirect to another page after successful deletion
			} else {
				console.error('Failed to delete book.');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div>
			<h2>Delete Book</h2>
			<p>Are you sure you want to delete this book?</p>
			<button onClick={handleDelete} className="btn btn-danger">
				Delete
			</button>
		</div>
	);
};

export default DeleteBook;
