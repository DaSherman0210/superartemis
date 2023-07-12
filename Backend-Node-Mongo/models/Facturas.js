import mongoose from "mongoose";

const facturaSchema = mongoose.Schema(
    {
        cliente:{
            type:String,
            required:true,
            trim:true
        },
        empleado:{
            type:String,
            required:true,
            trim:true
        },
        fechaFactura:{
            type:String,
            required:true,
            trim:true
        },
        rechaRegistro:{
            type:String,
            required:true,
            trim:true
        },
        fechaEnvio:{
            type:String,
            required:true,
            trim:true
        },
        envioVia:{
            type:String,
            required:true,
            trim:true
        },
        transporte:{
            type:String,
            required:true,
            trim:true
        },
        nombreEnvio:{
            type:String,
            required:true,
            trim:true
        },
        direccionEnvio:{
            type:String,
            required:true,
            trim:true
        },
        ciudadEnvio:{
            type:String,
            required:true,
            trim:true
        },
        regionEnvio:{
            type:String,
            required:true,
            trim:true
        },
        codigoPostalEnvio:{
            type:Number,
            required:true,
            trim:true
        },
        paisEnvio:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
);

const facturas = mongoose.model("facturas",facturaSchema);

export default facturas;