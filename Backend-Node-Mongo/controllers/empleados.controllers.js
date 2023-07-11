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
}

export {obtenerEmpleado,agregarEmpleado};