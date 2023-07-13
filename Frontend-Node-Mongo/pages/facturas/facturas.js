import { facturas ,deleteFactura,insertarFacturas} from "./api.js";

document.addEventListener("DOMContentLoaded", showFactura);
const table = document.querySelector('#facturas');

async function showFactura (){
  const factura = await facturas();
  console.log(factura);
  factura.forEach(factu => {
    const {_id , cliente , empleado , fechaFactura , rechaRegistro , fechaEnvio , envioVia , transporte , nombreEnvio , direccionEnvio , ciudadEnvio , regionEnvio , codigoPostalEnvio , paisEnvio} = factu;
    table.innerHTML += 
    `
      <tr>
        <td>${_id}</td>
        <td>${cliente}</td>
        <td>${empleado}</td>
        <td>${fechaFactura}</td>
        <td>${rechaRegistro}</td>
        <td>${envioVia}</td>
        <td>${fechaEnvio}</td>
        <td>${transporte}</td>
        <td>${nombreEnvio}</td>
        <td>${direccionEnvio}</td>
        <td>${ciudadEnvio}</td>
        <td>${regionEnvio}</td>
        <td>${codigoPostalEnvio}</td>
        <td>${paisEnvio}</td>
        <td> <button class="btn btn-danger delete" id="${_id}">Delete</button></td>
        <td> <button type="button" class="btn btn-warning update" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
      </tr>
    `
  }) 
}

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
      deleteFactura(id);
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
  
  const cliente=document.querySelector('#cliente').value;
  const empleado=document.querySelector('#empleado').value;
  const fechaFactura=document.querySelector('#fechaFactura').value;
  const rechaRegistro=document.querySelector('#rechaRegistro').value;
  const fechaEnvio=document.querySelector('#fechaEnvio').value;
  const envioVia=document.querySelector('#envioVia').value;
  const transporte=document.querySelector('#transporte').value;
  const nombreEnvio=document.querySelector('#nombreEnvio').value;
  const direccionEnvio=document.querySelector('#direccionEnvio').value;
  const ciudadEnvio=document.querySelector('#ciudadEnvio').value;
  const regionEnvio=document.querySelector('#regionEnvio').value;
  const codigoPostalEnvio=document.querySelector('#codigoPostalEnvio').value;
  const paisEnvio=document.querySelector('#paisEnvio').value;

  const factura={
    cliente,
    empleado,
    fechaFactura,
    rechaRegistro,
    fechaEnvio,
    envioVia,
    transporte,
    nombreEnvio,
    direccionEnvio,
    ciudadEnvio,
    regionEnvio,
    codigoPostalEnvio,
    paisEnvio
  }
  if(validation(factura)){
    alert("todos los datos son obligatorios")
  }else{
      return insertarFacturas(factura);
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


