import pg from "pg";

async function connect() {
	if (global.connection) {
		return global.connection.connect();
	}

	const pool = new pg.Pool({
		connectionString: "postgres://vujytmji:J_j5Q_klLwRWeedIf7lYqw0ggV4eGqKX@mouse.db.elephantsql.com/vujytmji"
	});
	global.connection = pool;

	return pool.connect();
}

export {
	connect
}
