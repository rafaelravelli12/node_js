import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

function getClient() {
	const uri = process.env.MONGO_URI_COMPASS;
	return new mongodb.MongoClient(uri);
}

export { getClient };
