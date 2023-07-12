const urlGetEmpleado = "http://localhost:5001/empleados";

export const empleados = async () => {
    try {
        const empleado = await fetch(`${urlGetEmpleado}/all`);
        const data = empleado.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteEmpleado = async (id)=>{
    try {
        await fetch(`${urlGetEmpleado}/delete/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "./empleados.html"
    } catch (error) {
        console.log(error)
    }
}

export const insertarEmpleado = async (empleado)=>{
    try {
        await fetch(`${urlGetEmpleado}/add`,{
            method:'POST',
            body:JSON.stringify(empleado),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "./empleados.html"
    } catch (error) {
        console.log(error); 
    }
  }