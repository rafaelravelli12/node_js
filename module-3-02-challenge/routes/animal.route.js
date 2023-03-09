import express from "express";
import AnimalController from "../controllers/animal.controller.js";

const router = express.Router();

router.get("/", AnimalController.getAnimais);
router.get("/:id", AnimalController.getAnimal);
router.post("/", AnimalController.createAnimal);
router.put("/", AnimalController.updateAnimal);
router.delete("/:id", AnimalController.deleteAnimal);

export default router;
