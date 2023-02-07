import fs from "fs";

let cars = JSON.parse(fs.readFileSync("car-list.json"));

export const moreModels = (req, res) => {
	const maxModelsLength = Math.max(...cars.map(obj => obj.models.length));
	const modelWithMoreBrands = cars
		.filter(obj => obj.models.length === maxModelsLength)
		.map(obj => obj.brand);
	const response = modelWithMoreBrands.length === 1 ? modelWithMoreBrands[0] : modelWithMoreBrands

	res.status(200).send(response)
};

export const lessModels = (req, res) => {
	const minModelsLength = Math.min(...cars.map(obj => obj.models.length));
	const modelWithLessBrands = cars
		.filter(obj => obj.models.length === minModelsLength)
		.map(obj => obj.brand);
	const response = modelWithLessBrands.length === 1 ? modelWithLessBrands[0] : modelWithLessBrands

	res.status(200).send(response)
};

export const listMoreModels = (req, res) => {
	const { qtd } = req.params;
	let countedModels = cars.map(obj => {
		return {
			brand: obj.brand,
			numOfModels: obj.models.length
		}
	});
	const formattedList = countedModels
		.sort((a, b) => a.brand.localeCompare(b.brand))
		.sort((a, b) => b.numOfModels - a.numOfModels)
		.slice(0, qtd)
		.map(obj => {
			return `${obj.brand} - ${obj.numOfModels}`
		});

	res.status(200).send(formattedList);
};

export const ListLessModels = (req, res) => {
	const { qtd } = req.params;
	const countedModels = cars.map(obj => {
		return {
			brand: obj.brand,
			numOfModels: obj.models.length
		}
	});
	const formattedList = countedModels
		.sort((a, b) => a.brand.localeCompare(b.brand))
		.sort((a, b) => a.numOfModels - b.numOfModels)
		.slice(0, qtd)
		.map(obj => {
			return `${obj.brand} - ${obj.numOfModels}`
		});

	res.status(200).send(formattedList);
};

export const listModels = (req, res) => {
	const { brandName } = req.body;

	const brandModels = cars
		.filter(obj => obj.brand.toUpperCase() === brandName.toUpperCase())
		.map(obj => obj.models)
		.flat();

	res.status(200).send(brandModels);
};
