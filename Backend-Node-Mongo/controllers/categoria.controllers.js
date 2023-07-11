import categoria from "../models/Categorias.js";

const obtenerCategoria  = async (req,res)=>{
    const categorias = await categoria.find();
    res.json(categorias);
}

export{obtenerCategoria};