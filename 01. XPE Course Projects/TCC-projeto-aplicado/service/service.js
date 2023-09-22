import mysql from "mysql2/promise";

const dbPassword = process.env.DB_PASSWORD;
const pool = mysql.createPool({
	host: "127.0.0.1", // or "localhost"
	user: "root",
	password: process.env.DB_PASSWORD,
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

// export const updateBook = async (req, res) => {
// 	try {
// 		const { id, titulo, ano_de_lancamento, quantidade_em_estoque, disciplina } = req.body;

// 		const connection = await pool.getConnection();
// 		await connection.execute(
// 			"UPDATE acervo SET titulo = ?, ano_de_lancamento = ?, quantidade_em_estoque = ?, disciplina = ? WHERE id = ?",
// 			[titulo, ano_de_lancamento, quantidade_em_estoque, disciplina, id]
// 		);
// 		connection.release();

// 		res.status(200).send("Book updated successfully");
// 	} catch (error) {
// 		console.error("Error:", error);
// 		res.status(500).send("Internal Server Error");
// 	}
// };
// // Update a book
// router.put("/books/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const { titulo, ano_de_lancamento, quantidade_em_estoque, disciplina } = req.body;

// 		const connection = await pool.getConnection();
// 		await connection.execute(
// 			"UPDATE acervo SET titulo = ?, ano_de_lancamento = ?, quantidade_em_estoque = ?, disciplina = ? WHERE id = ?",
// 			[titulo, ano_de_lancamento, quantidade_em_estoque, disciplina, id]
// 		);
// 		connection.release();

// 		res.status(200).send("Book updated successfully");
// 	} catch (error) {
// 		console.error("Error:", error);
// 		res.status(500).send("Internal Server Error");
// 	}
// });

// export const deleteBook = async (req, res) => {
// 	try {
// 		const { id } = req.body;

// 		const connection = await pool.getConnection();
// 		await connection.execute(
// 			"DELETE FROM acervo WHERE id = ?",
// 			[id]
// 		);
// 		connection.release();

// 		res.status(200).send("Book deleted successfully");
// 	} catch (error) {
// 		console.error("Error:", error);
// 		res.status(500).send("Internal Server Error");
// 	}
// };
// Delete a book
// router.delete("/books/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;

// 		const connection = await pool.getConnection();
// 		await connection.execute(
// 			"DELETE FROM acervo WHERE id = ?",
// 			[id]
// 		);
// 		connection.release();

// 		res.status(200).send("Book deleted successfully");
// 	} catch (error) {
// 		console.error("Error:", error);
// 		res.status(500).send("Internal Server Error");
// 	}
// });
