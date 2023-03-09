import PostRepository from "../repositories/post.repository.js";

async function createPost(postRegister) {
	await PostRepository.createPost(postRegister);
}

async function getAllPosts() {
	return await PostRepository.getAllPosts();
}

export default {
	createPost,
	getAllPosts
};
