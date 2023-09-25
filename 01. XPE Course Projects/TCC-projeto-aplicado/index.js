import express from "express";
import { router } from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(cors()); // Use CORS middleware

app.use(express.json());

app.use("/", router);

app.listen(4000, () => { // run serve by 'npx nodemon server.js'
	console.log("API Started");
});
