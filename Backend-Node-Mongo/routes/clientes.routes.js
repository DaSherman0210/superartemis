import  express  from "express";
import { obtenerClientes ,agregarClientes,deleteCliente,updateCliente} from "../controllers/clientes.controllers.js";

const router = express.Router();

router.get("/all",obtenerClientes);
router.post("/add",agregarClientes);
router.delete("/delete/:id",deleteCliente);
router.patch("/update/:id",updateCliente);

export default router;