import express from "express";

import {
	getBooks,
	addBook,
	updateBook,
	deleteBook
} from "../service/service.js";

export const router = express.Router();

router.get("/getBooks", getBooks);
router.post("/addBook", addBook);
router.put("/updateBook", updateBook);
router.delete("/deleteBook", deleteBook);
