import express from "express";

import {
	getBooks,
	getBook,
	addBook,
	updateBook,
	deleteBook,
	loginUser
} from "../service/service.js";

export const router = express.Router();

router.get("/getBooks", getBooks);
router.get("/getBook/:id", getBook);
router.post("/addBook", addBook);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);
router.post("/loginUser", loginUser);
