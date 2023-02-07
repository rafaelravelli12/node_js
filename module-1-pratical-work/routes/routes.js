import express from "express";
import {
	moreModels,
	lessModels,
	listMoreModels,
	ListLessModels
} from "../src/service.js";

// import {
// 	moreModels,
// 	lessModels,
// 	listMoreModels,
// 	ListLessModels,
// 	listModels
// } from "../src/brands.js";

export const router = express.Router();

router.get("/moreModels", moreModels);
router.get("/lessModels", lessModels);
router.get("/listMoreModels/:qtd", listMoreModels);
router.get("/ListLessModels/:qtd", ListLessModels);
