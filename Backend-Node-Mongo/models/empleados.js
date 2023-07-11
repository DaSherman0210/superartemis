import mongoose from "mongoose";

const empleadosSchema = mongoose.Schema(
    {

        nombre:{
            type:String,
            required:true,
            trim:true
        },
        titulo:{
            type:String,
            required:true,
            trim:true
        },
        tituloCortesia:{
            type:String,
            required:true,
            trim:true
        },
        fechaNacimiento:{
            type:String,
            required:true,
            trim:true
        },
        direccion:{
            type:String,
            required:true,
            trim:true
        },
        ciudad:{
            type:String,
            required:true,
            trim:true
        },
        regiones:{
            type:String,
            required:true,
            trim:true
        },
        codigoPostal:{
            type:Number,
            required:true,
            trim:true
        },
        pais:{
            type:String,
            required:true,
            trim:true
        },
        telefono:{
            type:Number,
            required:true,
            trim:true
        },
        extension:{
            type:String,
            required:true,
            trim:true
        },
        foto:{
            type:String,
            required:true,
            trim:true
        },
        notas:{
            type:Number,
            required:true,
            trim:true
        },
        jefe:{
            type:String,
            required:true,
            trim:true
        },
        rutaFoto:{
            type:String,
            required:true,
            trim: true
        }
    },
    {
        timestamps:true,
    }
);

const empleados = mongoose.model("empleados" ,empleadosSchema);

export default empleados;