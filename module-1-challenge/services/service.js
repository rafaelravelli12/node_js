import DeliveryRepository from "../repositories/repository.js";

async function newOrder(order) {
	return await DeliveryRepository.newOrder(order);
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

async function getOrders() {
	return await DeliveryRepository.getOrders();
}

async function getOrder(id) {
	return await DeliveryRepository.getOrder(id);
}

export default {
	newOrder,
	updateOrder,
	updateDeliverOrder,
	deleteOrder,
	getOrders,
	getOrder
}
