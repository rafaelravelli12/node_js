import express from "express";
import cors from "cors";
import winston from "winston";
import proprietarioRouter from "./routes/proprietario.route.js";
import animalRouter from "./routes/animal.route.js";
import servicoRouter from "./routes/servico.route.js";

// winston
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
	level: "silly",
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({ filename: "petshop.log" })
	],
	format: combine(
		label({ label: "petshop" }),
		timestamp(),
		myFormat
	)
});
// winston

const app = express();

app.use(express.json());
app.use(cors());

app.use("/proprietario", proprietarioRouter);
app.use("/animal", animalRouter);
app.use("/servico", servicoRouter);


app.use((err, req, res, next) => {
	logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
	res.status(400).send({ error: err.message });
})

app.listen(3000, () => console.log("API Started!"));
