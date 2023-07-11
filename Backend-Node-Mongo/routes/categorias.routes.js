import express from "express";
import { obtenerCategoria } from "../controllers/categoria.controllers.js";

const router  = express.Router();

router.get("/all",obtenerCategoria);

export default router;