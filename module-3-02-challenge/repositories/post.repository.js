import { getClient } from "./mongo.db.js";

async function createPost(postRegister) {
	const client = getClient();
	try {
		await client.connect();
		await client.db("database-posts").collection("collection-posts").insertOne(postRegister);
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
		return await client.db("database-posts").collection("collection-posts").find({}).toArray();
	} catch (err) {
		throw err;
	} finally {
		await client.close();
	}
}

export default {
	createPost,
	getAllPosts
};
