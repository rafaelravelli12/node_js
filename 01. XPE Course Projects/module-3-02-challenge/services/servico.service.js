import ServicoRepository from "../repositories/servico.repository.js";

async function getServicos(proprietarioId) {
	if (proprietarioId) {
		return await ServicoRepository.getServicosByProprietarioId(proprietarioId);
	}
	return await ServicoRepository.getServicos();
}

async function getServico(id) {
	return await ServicoRepository.getServico(id);
}

async function createServico(servico) {
	return await ServicoRepository.insertServico(servico);
}

async function updateServico(servico) {
	await ServicoRepository.updateServico(servico);
}

async function deleteServico(id) {
	await ServicoRepository.deleteServico(id);
}

export default {
	getServicos,
	getServico,
	createServico,
	deleteServico,
	updateServico
}
