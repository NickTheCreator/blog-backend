import express from "express";
import loginController from "../controllers/login.controller.js";

const router = express.Router();
router.post("/cadastrar-login", loginController.create);
router.post("/login", loginController.logar);
router.get("/get-login", loginController.getAll);
router.put("/login/:id", loginController.update);
router.delete("/delete-login/:id", loginController.remove);

export default router;
