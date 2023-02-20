import express from "express";
import DeliveryController from "../controllers/controller.js";

const router = express.Router();

router.post("/", DeliveryController.createOrder);
router.get("/", DeliveryController.getOrders);
router.get("/:id", DeliveryController.getOrder);
router.put("/", DeliveryController.updateOrder);
router.patch("/", DeliveryController.updateDeliverOrder);
router.delete("/:id", DeliveryController.deleteOrder);
router.get("/OrderAmountPerClient/:cliente", DeliveryController.getOrderAmountPerClient);
router.get("/OrderTotalValuePerClient/:cliente", DeliveryController.getOrderTotalValuePerClient);
router.get("/ProductAmount/:produto", DeliveryController.getProductAmount);
router.get("/ProductTotalValue/:produto", DeliveryController.getProductTotalValue);
router.get("/MostSellers/get", DeliveryController.getMostSellers);

router.use((err, req, res, next) => {
	logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
	res.status(400).send({ error: err.message });
});

export default router;
