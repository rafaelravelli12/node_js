import mongodb from "mongodb";

function getClient() {
	const uri = "mongodb+srv://rafaelravelli:IELvkb4sjs2GQFTw@cluster-xpe-module-3-ch.ryleqyn.mongodb.net/test";
	return new mongodb.MongoClient(uri);
}

export { getClient };
