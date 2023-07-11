import  express  from "express";

const router = express.Router();

import { obtenerEmpleado , agregarEmpleado} from "../controllers/empleados.controllers.js";


router.get("/all",obtenerEmpleado);
router.post("/add",agregarEmpleado);

export default router;