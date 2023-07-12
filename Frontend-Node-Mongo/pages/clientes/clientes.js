import { clientes , deleteClientes , insertarClientes } from "./api.js";

document.addEventListener("DOMContentLoaded", showClientes);
const table = document.querySelector('#clientes');

async function showClientes (){
  const cliente = await clientes();
  console.log(cliente);
  cliente.forEach(cliente => {
    const {_id , compania , contacto , titulo , direccion , ciudad , regiones , codigoPostal , pais , telefono , fax} = cliente;
    table.innerHTML += 
    `
      <tr>
        <td>${_id}</td>
        <td>${compania}</td>
        <td>${contacto}</td>
        <td>${titulo}</td>
        <td>${direccion}</td>
        <td>${ciudad}</td>
        <td>${regiones}</td>
        <td>${codigoPostal}</td>
        <td>${pais}</td>
        <td>${telefono}</td>
        <td>${fax}</td>
        <td> <button class="btn btn-danger delete" id="${_id}">Delete</button></td>
        <td> <button type="button" class="btn btn-warning update" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
      </tr>
    `
  }) 
}

//metodo eliminar - DELETE 

table.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete')){
      const id=e.target.getAttribute('id');
      borrar(id);
  }else if(e.target.classList.contains('update')){
      const id=e.target.getAttribute('id');
      getCategoria(id);
  }
})

const borrar=(id)=>{
  const confir=confirm("desea eliminarlo");
  if(confir){
      console.log("uno"); 
      deleteClientes(id);
  }
}

//metodo insertar


const formInsert=document.querySelector('#formInsert');
// agg un addeventListener para el evento submit y ejecutar la funcion de insertar
formInsert.addEventListener('submit',(e)=>{
  e.preventDefault();
  insert();
})

//
const insert=()=>{
  
  const compania=document.querySelector('#company').value;
  const contacto=document.querySelector('#contact').value;
  const titulo=document.querySelector('#title').value;
  const direccion=document.querySelector('#direction').value;
  const ciudad=document.querySelector('#city').value;
  const regiones=document.querySelector('#region').value;
  const codigoPostal=document.querySelector('#potCode').value;
  const pais=document.querySelector('#country').value;
  const telefono=document.querySelector('#cellphone').value;
  const fax=document.querySelector('#fax').value;

  const cliente={
    compania,
    contacto,
    titulo,
    direccion,
    ciudad,
    regiones,
    codigoPostal,
    pais,
    telefono,
    fax
  }
  if(validation(cliente)){
    alert("todos los datos son obligatorios")
  }else{
      return insertarClientes(cliente);
  } 
}

/*
//update

const getClient=async (id)=>{
  const data=await getCliente(id);
  const {Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax}=data[0]
  console.log(data);
  const CompaniaUp=document.querySelector('#companyUpdat');
  CompaniaUp.setAttribute('placeholder',Compania);
  CompaniaUp.setAttribute('idCli',id);

  const ContactoUp=document.querySelector('#contactUpdat');
  ContactoUp.setAttribute('placeholder',Contacto);

  const TituloUp=document.querySelector('#titleUpdat');
  TituloUp.setAttribute('placeholder',Titulo);

  const DireccionUp=document.querySelector('#directionUpdat');
  DireccionUp.setAttribute('placeholder',Direccion);

  const CiudadUp=document.querySelector('#cityUpdat');
  CiudadUp.setAttribute('placeholder',Ciudad);

  const RegionesUp=document.querySelector('#regionUpdat');
 RegionesUp.setAttribute('placeholder',Regiones);

  const CodigoPostalUp=document.querySelector('#potCodeUpdat');
  CodigoPostalUp.setAttribute('placeholder',CodigoPostal);

  const PaisUp=document.querySelector('#countryUpdat');
  PaisUp.setAttribute('placeholder',Pais);

  const TelefonoUp=document.querySelector('#cellphoneUpdat');
  TelefonoUp.setAttribute('placeholder',Telefono);

  const FaxUp=document.querySelector('#faxUpdat');
  FaxUp.setAttribute('placeholder',Fax);
}

const updateForm=document.querySelector('#updateForm');
updateForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  updateClie();
})


function updateClie() {
  const id=document.querySelector('#companyUpdat');
  const dato=id.getAttribute('idCli');
  const Compania=document.querySelector('#companyUpdat').value;
  const Contacto=document.querySelector('#contactUpdat').value;
  const Titulo=document.querySelector('#titleUpdat').value;
  const Direccion=document.querySelector('#directionUpdat').value;
  const Ciudad=document.querySelector('#cityUpdat').value;
  const Regiones=document.querySelector('#regionUpdat').value;
  const CodigoPostal=document.querySelector('#potCodeUpdat').value;
  const Pais=document.querySelector('#countryUpdat').value;
  const Telefono=document.querySelector('#cellphoneUpdat').value;
  const Fax=document.querySelector('#faxUpdat').value;
 
  const cliente={
    Compania,
    Contacto,
    Titulo,
    Direccion,
    Ciudad,
    Regiones,
    CodigoPostal,
    Pais,
    Telefono,
    Fax
  }
  if(validation(cliente)){
    alert("todos los datos son obligatorios")
  }else{
      return update(cliente,dato);
  } 
}
*/
function validation(obj) {
  return !Object.values(obj).every(element=>element != '')
}


