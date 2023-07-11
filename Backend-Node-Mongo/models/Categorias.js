import mongoose from "mongoose";

const categoriaSchema  = mongoose.Schema(
    {
        imagen: {
            type:String,
            required:true,
            trim:true
        },
        descripcion: {
            type:String,
            required: true,
            trim:true
        },
        categoriaNombre:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true,
    }
);

const categoria = mongoose.model("categoria",categoriaSchema); 

export default categoria;