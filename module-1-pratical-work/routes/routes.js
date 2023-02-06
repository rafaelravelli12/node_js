import express from "express";
import { moreModels } from "../src/service.js";

// import {
// 	moreModels,
// 	lessModels,
// 	listMoreModels,
// 	ListLessModels,
// 	listModels
// } from "../src/brands.js";

export const router = express.Router();

router.get("/moreModels", moreModels);
