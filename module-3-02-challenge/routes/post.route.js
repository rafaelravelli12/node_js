import express from "express";
import PostController from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", PostController.createPost);
router.get("/", PostController.getAllPosts);
router.post("/comment", PostController.createComment);

export default router;
