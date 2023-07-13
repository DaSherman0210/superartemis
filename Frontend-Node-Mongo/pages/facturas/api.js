const urlGetFactura = "http://localhost:5001/facturas";

export const facturas = async () => {
    try {
        const empleado = await fetch(`${urlGetFactura}/all`);
        const data = empleado.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFactura = async (id)=>{
    try {
        await fetch(`${urlGetFactura}/delete/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "./facturas.html"
    } catch (error) {
        console.log(error)
    }
}

export const insertarFacturas = async (facturas)=>{
    try {
        await fetch(`${urlGetFactura}/add`,{
            method:'POST',
            body:JSON.stringify(facturas),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "./facturas.html"
    } catch (error) {
        console.log(error); 
    }
}