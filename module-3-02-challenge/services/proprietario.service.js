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

// Need to solve this relation

// async function deleteProprietario(id) {
// 	const ownerAnimal = await AnimalRepository.getAnimaisByProprietarioId(id);
// 	if (!ownerAnimal) {
// 		await ProprietarioRepository.deleteProprietario(id);
// 	} else {
// 		throw new Error("The informed proprietario is a animal's owner so can't be deleted.");
// 	}
// }

async function deleteProprietario(id) {
	await ProprietarioRepository.deleteProprietario(id);
}

export default {
	getProprietarios,
	getProprietario,
	createProprietario,
	deleteProprietario,
	updateProprietario
}
