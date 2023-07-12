import express  from "express";
import {obtenerFactura,agregarFactura,deleteFactura,updateFactura} from "../controllers/facturas.controllers.js"

const router = express.Router();

router.get("/all",obtenerFactura);
router.post("/add",agregarFactura);
router.delete("/delete/:id",deleteFactura);
router.patch("/update/:id",updateFactura);

export default router;