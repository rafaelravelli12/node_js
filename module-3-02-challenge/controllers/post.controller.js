import PostService from "../services/post.service.js";

async function createPost(req, res, next) {
	try {
		let postRegister = req.body;
		await PostService.createPost(postRegister);
		res.end();
		logger.info(`POST /post - ${JSON.stringify(postRegister)}`);
	} catch (err) {
		next(err);
	}
}

async function getAllPosts(req, res, next) {
	try {
		res.send(await PostService.getAllPosts());
		logger.info("GET /product/product/info");
	} catch (err) {
		next(err);
	}
}

export default {
	createPost,
	getAllPosts
};
