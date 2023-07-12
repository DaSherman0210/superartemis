import empleados from "../models/empleados.js";

const obtenerEmpleado = async (req,res) => {
    const empleado = await empleados.find();
    res.json(empleado);
};

const agregarEmpleado = async (req,res) => {
    const empleado = new empleados(req.body);   
    try {
        const nuevoEmpleado = await empleado.save();
        res.json(nuevoEmpleado)
    } catch (error) {
        console.log(error.message);
    }
};

const deleteEmpleado = async (req,res) => {
    try {
        await empleados.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updateEmpĺeado = async (req,res) => {
    try {
        const empleado = await empleados.findOne({_id:req.params.id})
        if (req.body.apellido) {
            empleado.apellido = req.body.apellido;
        }
        if (req.body.nombre) {
            empleado.nombre = req.body.nombre;
        }
        if (req.body.titulo) {
            empleado.titulo = req.body.titulo;
        }
        if (req.body.tituloCortesia) {
            empleado.tituloCortesia = req.body.tituloCortesia;
        }
        if (req.body.fechaNacimiento) {
            empleado.fechaNacimiento = req.body.fechaNacimiento;
        }
        if (req.body.direccion) {
            empleado.direccion = req.body.direccion;
        }
        if (req.body.ciudad) {
            empleado.ciudad = req.body.ciudad;
        }
        if (req.body.regiones) {
            empleado.regiones = req.body.regiones;
        }
        if (req.body.codigoPostal) {
            empleado.codigoPostal = req.body.codigoPostal;
        }
        if (req.body.pais) {
            empleado.pais = req.body.pais;
        }
        if (req.body.telefono) {
            empleado.telefono = req.body.telefono;
        }
        if (req.body.extension) {
            empleado.extension = req.body.extension;
        }
        if (req.body.foto) {
            empleado.foto = req.body.foto;
        }
        if (req.body.notas) {
            empleado.notas = req.body.notas;
        }
        if (req.body.jefe) {
            empleado.jefe = req.body.jefe;
        }
        if (req.body.rutaFoto) {
            empleado.rutaFoto = req.body.rutaFoto;
        }
        await empleado.save();
        res.send(empleado)
    } catch (error) {
        console.log(error);
    }
}
 
export {obtenerEmpleado,agregarEmpleado,deleteEmpleado,updateEmpĺeado};