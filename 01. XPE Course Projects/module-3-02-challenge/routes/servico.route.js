import express from "express";
import ServicoController from "../controllers/servico.controller.js";

const router = express.Router();

router.get("/", ServicoController.getServicos);
router.get("/:id", ServicoController.getServico);
router.post("/", ServicoController.createServico);
router.put("/", ServicoController.updateServico);
router.delete("/:id", ServicoController.deleteServico);

export default router;
