import categoria from "../models/Categorias.js";

const obtenerCategoria  = async (req,res)=>{
    const categorias = await categoria.find();
    res.json(categorias);
}

const obtenerOneCategoria  = async (req,res)=>{
    const categorias = await categoria.findOne({_id: req.params.id});
    res.json(categorias);
}

const agregarCategoria = async (req,res) => {
    const categorias = new categoria(req.body);

    try {
        const nuevaCategoria = await categorias.save();
        res.json(nuevaCategoria);
    } catch (error) {
        console.log(error.message);
    }

}
 
const borrarCategoria = async (req,res)=> {
    try {
        await categoria.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(500);
        res.send({error:"Categoria no existe"})
    }
}

const actualizarCategoria = async (req,res) => {
    try {
        const categorias = await categoria.findOne({_id:req.params.id});
        if (req.body.imagen) {
            categorias.imagen = req.body.imagen;
        }
        if (req.body.categoriaNombre) {
            categorias.categoriaNombre = req.body.categoriaNombre;
        }
        if (req.body.descripcion) {
            categorias.descripcion = req.body.descripcion;
        }
        await categorias.save();
        res.send(categorias);
    } catch (error) {
        res.status(500);
        console.log(error);
    }
}

export{obtenerCategoria,agregarCategoria,borrarCategoria,actualizarCategoria,obtenerOneCategoria};