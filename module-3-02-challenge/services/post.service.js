import PostRepository from "../repositories/post.repository.js";

async function createPost(postRegister) {
	await PostRepository.createPost(postRegister);
}

async function getAllPosts() {
	return await PostRepository.getAllPosts();
}

async function createComment(postId, comentario) {
	return await PostRepository.createComment(postId, comentario);
}

export default {
	createPost,
	getAllPosts,
	createComment
};
