import DeliveryRepository from "../repositories/repository.js";

async function createOrder(order) {
	return await DeliveryRepository.createOrder(order);
}

async function getOrders() {
	return await DeliveryRepository.getOrders();
}

async function getOrder(id) {
	return await DeliveryRepository.getOrder(id);
}

async function updateOrder(order) {
	return await DeliveryRepository.updateOrder(order);
}

async function updateDeliverOrder(order) {
	const obj = await DeliveryRepository.getOrder(order.id);
	obj.entregue = order.entregue;
	return await DeliveryRepository.updateOrder(obj);
}

async function deleteOrder(id) {
	return await DeliveryRepository.deleteOrder(id)
}

export default {
	createOrder,
	updateOrder,
	updateDeliverOrder,
	deleteOrder,
	getOrders,
	getOrder
}
