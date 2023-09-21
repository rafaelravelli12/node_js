import express from "express";
import { router } from "./routes/routes.js";
import cors from "cors"; // Import the cors package

const app = express();

app.use(cors()); // Use CORS middleware

app.use(express.json());

app.use("/", router);

app.listen(4000, () => {
	console.log("API Started");
});
