import express from "express";
import winston from "winston";
import { promises as fs } from "fs";
import DeliveryRouter from "./routes/routes.js";

const app = express();
app.use(express.json());
const { readFile, writeFile } = fs;

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
	level: "silly",
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({ filename: "delivery-api.log" })
	],
	format: combine(
		label({ label: "delivery-api" }),
		timestamp(),
		myFormat
	)
});

app.listen(3000, async () => {
	try {
		await readFile("pedidos.json");
		logger.info("API Started!");
	} catch (err) {
		const initialJson = {
			nextId: 1,
			orders: [],
		};
		writeFile("pedidos.json", JSON.stringify(initialJson))
			.then(() => {
				logger.info("API Started and File Created!");
			})
			.catch((err) => {
				logger.error(err);
			});
	}
});

app.use("/delivery", DeliveryRouter);
