import AnimalRepository from "../repositories/animal.repository.js";

async function getAnimais(proprietarioId) {
	if (proprietarioId) {
		return await AnimalRepository.getAnimaisByProprietarioId(proprietarioId);
	}
	return await AnimalRepository.getAnimais();
}

async function getAnimal(id) {
	return await AnimalRepository.getAnimal(id);
}

async function createAnimal(animal) {
	return await AnimalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
	await AnimalRepository.updateAnimal(animal);
}

async function deleteAnimal(id) {
	await AnimalRepository.deleteAnimal(id);
}

export default {
	getAnimais,
	getAnimal,
	createAnimal,
	deleteAnimal,
	updateAnimal
}
