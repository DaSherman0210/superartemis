import Express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriaRouter from "./routes/categorias.routes.js";
import clientesRouter from "./routes/clientes.routes.js"

const app = Express();

app.use(Express.json());

dotenv.config();

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT , ()=>{
    console.log(`Server web installing on port ${PORT}`);
})

app.use("/categoria",categoriaRouter);
app.use("/clientes",clientesRouter);
