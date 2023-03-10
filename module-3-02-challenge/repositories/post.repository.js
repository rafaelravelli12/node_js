import { getClient } from "./mongo.db.js";
import { ObjectId } from 'mongodb';

async function createPost(postRegister) {
	const client = getClient();
	try {
		await client.connect();
		await client.db("v01_post_and_comments").collection("w01_post_and_comments").insertOne(postRegister);
	} catch (err) {
		throw err;
	} finally {
		await client.close();
	}
}

async function getAllPosts() {
	const client = getClient();
	try {
		await client.connect();
		return await client.db("v01_post_and_comments").collection("w01_post_and_comments").find({}).toArray();
	} catch (err) {
		throw err;
	} finally {
		await client.close();
	}
}

async function createComment(postId, comentario) {
	const client = getClient();
	try {
		await client.connect();
		const objectId = new ObjectId(postId);
		const result = await client
			.db("v01_post_and_comments")
			.collection("w01_post_and_comments")
			.findOneAndUpdate(
				{ _id: objectId },
				{ $push: { comentarios: comentario } },
				{ returnOriginal: false, returnDocument: 'after' }
			);
		return result.value;
	} catch (err) {
		throw err;
	} finally {
		await client.close();
	}
}

export default {
	createPost,
	getAllPosts,
	createComment
};
