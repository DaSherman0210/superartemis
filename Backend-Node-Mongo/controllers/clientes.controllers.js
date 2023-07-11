import clientes from "../models/Clientes.js";

const obtenerClientes = async (req,res) => {
    const cliente = await clientes.find();
    res.json(cliente);
}

const agregarClientes = async (req,res) => {
    const cliente = await clientes(req.body);
    try {
        const nuevoCliente = await cliente.save();
        res.json(nuevoCliente);
    } catch (error) {
        console.log(error.message);
    }
}

const deleteCliente = async (req,res) => {
    try {
        await clientes.deleteOne({_id:req.params.id})
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updateCliente = async (req,res) => {
    try {
        const cliente = await clientes.findOne({_id:req.params.id})
        if (req.body.compania){
            cliente.compania = req.body.compania;
        }
        if (req.body.contacto) {
            cliente.contacto = req.body.contacto;
        }
        if (req.body.titulo) {
            cliente.titulo = req.body.titulo;
        }
        if (req.body.direccion) {
            cliente.direccion = req.body.direccion;
        }
        if (req.body.ciudad) {
            cliente.ciudad = req.body.ciudad;
        }
        if (req.body.regiones) {
            cliente.regiones = req.body.regiones;
        }
        if (req.body.codigoPostal) {
            cliente.codigoPostal = req.body.codigoPostal;
        }
        if (req.body.pais) {
            cliente.pais = req.body.pais;
        }
        if (req.body.telefono) {
            cliente.telefono = req.body.telefono;
        }
        if (req.body.fax) {
            cliente.fax = req.body.fax;
        }
        await cliente.save();
        res.send(cliente);
    } catch (error) {
        console.log(error);
    }
}

export {obtenerClientes,agregarClientes,deleteCliente,updateCliente};