import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
	process.env.POSTGRES_URI_ELEPHANTSQL,
	{
		dialect: "postgres",
		define: {
			timestamps: false,
		}
	}
);

export default sequelize;
