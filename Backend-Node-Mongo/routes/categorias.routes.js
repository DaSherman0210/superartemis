import express from "express";
import { obtenerCategoria,agregarCategoria,borrarCategoria,actualizarCategoria,obtenerOneCategoria} from "../controllers/categoria.controllers.js";

const router  = express.Router();

router.get("/all",obtenerCategoria);
router.post("/add",agregarCategoria);
router.delete("/delete/:id",borrarCategoria);
router.patch("/update/:id",actualizarCategoria);
router.get("/getOne/:id",obtenerOneCategoria)

export default router;