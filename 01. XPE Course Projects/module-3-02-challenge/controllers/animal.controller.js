import AnimalService from "../services/animal.service.js";

async function getAnimais(req, res, next) {
	try {
		res.send(await AnimalService.getAnimais(req.query.proprietarioId));
		logger.info("GET /animal")
	} catch (err) {
		next(err);
	}
}

async function getAnimal(req, res, next) {
	try {
		res.send(await AnimalService.getAnimal(req.params.id));
		logger.info("GET /animal");
	} catch (err) {
		next(err);
	}
}

async function createAnimal(req, res, next) {
	try {
		let animal = req.body;
		if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
			throw new Error("Nome, tipo and proprietarioId are mandatory.");
		}
		animal = await AnimalService.createAnimal(animal)
		res.send(animal);
		logger.info(`POST /animal - ${JSON.stringify(animal)}`);
	} catch (err) {
		next(err);
	}
}

async function updateAnimal(req, res, next) {
	try {
		let animal = req.body;
		if (!animal.animalId || !animal.nome || !animal.tipo || !animal.proprietarioId) {
			throw new Error("Animal_id, nome, tipo and proprietarioId are mandatory.");
		}
		animal = await AnimalService.updateAnimal(animal);
		res.send(animal);
		logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
	} catch (err) {
		next(err);
	}
}

async function deleteAnimal(req, res, next) {
	try {
		await AnimalService.deleteAnimal(req.params.id);
		res.end()
		logger.info("DELETE /animal");
	} catch (err) {
		next(err);
	}
}

export default {
	getAnimais,
	getAnimal,
	createAnimal,
	deleteAnimal,
	updateAnimal
}
