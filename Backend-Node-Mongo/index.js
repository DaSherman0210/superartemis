import Express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";

const app = Express();
dotenv.config();

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT , ()=>{
    console.log(`Server web installing on port ${PORT}`);
})
