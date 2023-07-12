import Facturas from "../models/Facturas.js";

const obtenerFactura = async (req,res) => {
    const factura = await Facturas.find();
    res.json(factura);
}

const agregarFactura = async (req,res) => {
    const factura = new Facturas(req.body);
    try {
        const nuevaFactura = await factura.save();
        res.json(nuevaFactura);
    } catch (error) {
        console.log(error);
    }
}

const deleteFactura = async (req,res)=> {
    try {
        await Facturas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updateFactura = async (req,res) => {
    try {
        const factura = await Facturas.findOne({_id:req.params.id});
        if (req.body.cliente) {
            factura.cliente = req.body.cliente;
        }
        if (req.body.empleado) {
            factura.empleado = req.body.empleado;
        }
        if (req.body.fechaFactura) {
            factura.fechaFactura = req.body.fechaFactura;
        }
        if (req.body.rechaRegistro) {
            factura.rechaRegistro = req.body.rechaRegistro;
        }
        if (req.body.fechaEnvio) {
            factura.fechaEnvio = req.body.fechaEnvio;
        }
        if (req.body.envioVia) {
            factura.envioVia = req.body.envioVia;
        }
        if (req.body.transporte) {
            factura.transporte = req.body.transporte;
        }
        if (req.body.nombreEnvio) {
            factura.nombreEnvio = req.body.nombreEnvio;
        }
        if (req.body.direccionEnvio) {
            factura.direccionEnvio = req.body.direccionEnvio;
        }
        if (req.body.ciudadEnvio) {
            factura.ciudadEnvio = req.body.ciudadEnvio;
        }
        if (req.body.regionEnvio) {
            factura.regionEnvio = req.body.regionEnvio;
        }
        if (req.body.codigoPostalEnvio) {
            factura.codigoPostalEnvio = req.body.codigoPostalEnvio;
        }
        if (req.body.paisEnvio) {
            factura.paisEnvio = req.body.paisEnvio;
        }

        await factura.save();
        res.send(factura);

    } catch (error) {
        res.status(500);
        console.log(error);
    }
}

export {obtenerFactura,agregarFactura,deleteFactura,updateFactura}