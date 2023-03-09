import Sequelize from "sequelize";

const sequelize = new Sequelize(
	"postgres://vujytmji:J_j5Q_klLwRWeedIf7lYqw0ggV4eGqKX@mouse.db.elephantsql.com/vujytmji",
	{
		dialect: "postgres",
		define: {
			timestamps: false,
		}
	}
);

export default sequelize;
