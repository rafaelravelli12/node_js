import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function createOrder(order) {
	const data = JSON.parse(await readFile("pedidos.json"));
	order = {
		id: data.nextId++,
		cliente: order.cliente,
		produto: order.produto,
		valor: order.valor,
		entregue: false,
		timestamp: new Date()
	};
	data.orders.push(order);
	await writeFile("pedidos.json", JSON.stringify(data, null, 2));
	return order;
}

async function getOrders() {
	const data = JSON.parse(await readFile("pedidos.json"));
	return data.orders;
}

async function getOrder(id) {
	const orders = await getOrders();
	const order = orders.find(obj => obj.id === parseInt(id));
	if (order) {
		return order;
	};
	throw new Error("Record not found");
}

async function updateOrder(order) {
	const data = JSON.parse(await readFile("pedidos.json"));
	const index = data.orders.findIndex(a => a.id === order.id);
	if (index === -1) {
		throw new Error("Record not found");
	};
	data.orders[index].cliente = order.cliente;
	data.orders[index].produto = order.produto;
	data.orders[index].valor = order.valor;
	data.orders[index].entregue = order.entregue;
	await writeFile("pedidos.json", JSON.stringify(data, null, 2));
	return data.orders[index];
}

async function deleteOrder(id) {
	const data = JSON.parse(await readFile("pedidos.json"));
	data.orders = data.orders.filter(order => order.id !== parseInt(id));
	await writeFile("pedidos.json", JSON.stringify(data, null, 2));
}

export default {
	createOrder,
	updateOrder,
	getOrders,
	getOrder,
	deleteOrder
}
