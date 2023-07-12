import  express  from "express";

const router = express.Router();

import { obtenerEmpleado , agregarEmpleado, deleteEmpleado,updateEmpĺeado} from "../controllers/empleados.controllers.js";


router.get("/all",obtenerEmpleado);
router.post("/add",agregarEmpleado);
router.delete("/delete/:id",deleteEmpleado);
router.patch("/update/:id",updateEmpĺeado);

export default router;