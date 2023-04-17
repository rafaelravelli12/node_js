import express from "express";
import {
	moreModels,
	lessModels,
	listMoreModels,
	ListLessModels,
	listModels
} from "../service/service.js";

export const router = express.Router();

router.get("/moreModels", moreModels);
router.get("/lessModels", lessModels);
router.get("/listMoreModels/:qtd", listMoreModels);
router.get("/ListLessModels/:qtd", ListLessModels);
router.post("/listModels", listModels);
