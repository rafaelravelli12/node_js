import ProprietarioRepository from "../repositories/proprietario.repository.js";
import AnimalRepository from "../repositories/animal.repository.js"

async function getProprietarios() {
	return await ProprietarioRepository.getProprietarios();
}

async function getProprietario(id) {
	return await ProprietarioRepository.getProprietario(id);
}

async function createProprietario(proprietario) {
	return await ProprietarioRepository.insertProprietario(proprietario);
}

async function updateProprietario(proprietario) {
	await ProprietarioRepository.updateProprietario(proprietario);
}

async function deleteProprietario(id) {
	const ownerAnimal = await AnimalRepository.getAnimaisByProprietarioId(id);
	if (!ownerAnimal[0]) {
		await ProprietarioRepository.deleteProprietario(id);
	} else {
		throw new Error("The informed proprietario is a animal's owner so can't be deleted.");
	}
}

export default {
	getProprietarios,
	getProprietario,
	createProprietario,
	deleteProprietario,
	updateProprietario
}
