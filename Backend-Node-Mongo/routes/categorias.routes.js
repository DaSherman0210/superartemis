import express from "express";
import { obtenerCategoria,agregarCategoria,borrarCategoria,actualizarCategoria} from "../controllers/categoria.controllers.js";

const router  = express.Router();

router.get("/all",obtenerCategoria);
router.post("/add",agregarCategoria);
router.delete("/delete/:id",borrarCategoria);
router.patch("/update/:id",actualizarCategoria)

export default router;