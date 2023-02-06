import fs from "fs";

let cars = JSON.parse(fs.readFileSync("car-list.json"));

export const moreModels = (req, res) => {
	const maxModelsLength = Math.max(...cars.map(car => car.models.length));
	const modelWithMoreBrands = cars
		.filter(car => car.models.length === maxModelsLength)
		.map(car => car.brand);
	const response = modelWithMoreBrands.length === 1 ? modelWithMoreBrands[0] : modelWithMoreBrands
	res.status(200).send(response)
};
