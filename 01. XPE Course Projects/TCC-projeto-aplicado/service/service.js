import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const dbPassword = process.env.DB_PASSWORD;
const pool = mysql.createPool({
	host: "127.0.0.1", // or "localhost"
	user: "root",
	password: dbPassword,
	database: "xpe-tcc-projeto-aplicado"
});

export const getBooks = async (req, res) => {
	try {
		const connection = await pool.getConnection();
		const [rows] = await connection.execute("SELECT * FROM acervo");
		connection.release();

		res.status(200).json(rows);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).send("Internal Server Error");
	}
};

export const getBook = async (req, res) => {
	const bookId = req.params.id;

	try {
		const connection = await pool.getConnection();
		const [rows] = await connection.execute("SELECT * FROM acervo WHERE id = ?", [bookId]);
		connection.release();

		if (rows.length === 0) {
			return res.status(404).json({ message: 'Book not found' });
		}

		res.status(200).json(rows[0]);
	} catch (error) {
		console.error("Error:", error);
		res.status(500).send("Internal Server Error");
	}
};

export const addBook = async (req, res) => {
	try {
		const { titulo, ano_de_lancamento, quantidade_em_estoque, disciplina } = req.body;

		const connection = await pool.getConnection();
		await connection.execute(
			"INSERT INTO acervo (titulo, ano_de_lancamento, quantidade_em_estoque, disciplina) VALUES (?, ?, ?, ?)",
			[titulo, ano_de_lancamento, quantidade_em_estoque, disciplina]
		);
		connection.release();

		res.status(201).send("Book added successfully");
	} catch (error) {
		console.error("Error:", error);
		res.status(500).send("Internal Server Error");
	}
};

export const updateBook = async (req, res) => {
	const bookId = req.params.id; // Assuming you pass the book ID as a URL parameter
	const { titulo, ano_de_lancamento, quantidade_em_estoque, disciplina } = req.body;

	try {
		const connection = await pool.getConnection();
		await connection.execute(
			"UPDATE acervo SET titulo = ?, ano_de_lancamento = ?, quantidade_em_estoque = ?, disciplina = ? WHERE id = ?",
			[titulo, ano_de_lancamento, quantidade_em_estoque, disciplina, bookId]
		);
		connection.release();

		res.json({ message: 'Book updated successfully' });
	} catch (error) {
		console.error("Error:", error);
		res.status(500).send("Internal Server Error");
	}
};

export const deleteBook = async (req, res) => {
	const bookId = req.params.id; // Assuming you pass the book ID as a URL parameter

	try {
		const connection = await pool.getConnection();
		const [result] = await connection.execute(
			"DELETE FROM acervo WHERE id = ?",
			[bookId]
		);

		if (result.affectedRows === 0) {
			return res.status(404).json({ message: 'Book not found' });
		}
		connection.release();

		res.status(200).json({ message: 'Book deleted successfully' });
	} catch (error) {
		console.error("Error:", error);
		res.status(500).send("Internal Server Error");
	}
};

export const loginUser = async (req, res) => {
	const { email, senha } = req.body;

	try {
		const connection = await pool.getConnection();
		const [rows] = await connection.execute(
			"SELECT * FROM usuarios WHERE email = ? and senha = ?",
			[email, senha]
		);
		connection.release();

		if (rows.length === 0) {
			return res.status(401).json({ message: 'Invalid username or password' });
		}

		const user = rows[0];
		res.json({ message: 'Login successful' });
	} catch (error) {
		console.error("Error:", error);
		res.status(500).send("Internal Server Error");
	}
};
