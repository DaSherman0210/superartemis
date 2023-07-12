import Express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriaRouter from "./routes/categorias.routes.js";
import clientesRouter from "./routes/clientes.routes.js";
import empleadosRouter from "./routes/empleados.routes.js";
import facturasRouter from "./routes/facturas.routes.js";
import cors from "cors";

const app = Express();
app.use(Express.json());

dotenv.config();

const PORT = process.env.PORT;

conectarDB();

const corsOption={
    methods: ["GET","POST","PATCH","DELETE"]
}

app.use(cors(corsOption));

app.listen(PORT, ()=>{
    console.log(`Server web installing on port ${PORT}`);
})

app.use("/categoria",categoriaRouter);
app.use("/clientes",clientesRouter);
app.use("/empleados",empleadosRouter);
app.use("/facturas",facturasRouter);
