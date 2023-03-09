import express from "express";
import ProprietarioController from "../controllers/proprietario.controller.js";

const router = express.Router();

router.get("/", ProprietarioController.getProprietarios);
router.get("/:id", ProprietarioController.getProprietario);
router.post("/", ProprietarioController.createProprietario);
router.put("/", ProprietarioController.updateProprietario);
router.delete("/:id", ProprietarioController.deleteProprietario);

export default router;
