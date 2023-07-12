const urlGetCli = "http://localhost:5001/clientes"

export const clientes = async () => {
  try {
    const cliente = await fetch(`${urlGetCli}/all`);
    const data = cliente.json();
    return data;
  } catch (error) {
    console.log(error.message);                                                
  }
};

export const deleteClientes = async (id)=>{
  try {
      await fetch(`${urlGetCli}/delete/${id}`,{
          method:'DELETE',
          headers:{
              'Content-Type':'application/json'
          }
      })
      window.location.href = "./clientes.html"
  } catch (error) {
      console.log(error)
  }
}

export const insertarClientes = async (categoria)=>{
  try {
      await fetch(`${urlGetCli}/add`,{
          method:'POST',
          body:JSON.stringify(categoria),
          headers:{
              'Content-Type':'application/json'
          }
      })
      window.location.href = "./clientes.html"
  } catch (error) {
      console.log(error); 
  }
}