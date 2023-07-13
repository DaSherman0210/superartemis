import { categorias , deleteCategoria , insertarCategorias,getOneCategoria,updateCategoria} from "./api.js";


document.addEventListener("DOMContentLoaded",showCategorias);
const tableCat=document.querySelector('#categorias');


async function showCategorias() {
    const data=await categorias();
    console.log(data);
    data.forEach(element => {
        const {_id,categoriaNombre,descripcion,imagen} = element;
        tableCat.innerHTML+=`
            <tr>
            <td>${_id}</td>
            <td>${categoriaNombre}</td>
            <td>${descripcion}</td>
            <td>${imagen}</td>
            <td> <button class="btn btn-danger delete" id="${_id}">Delete</button></td>
            <td> <button type="button" class="btn btn-warning update" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
            </tr>
        `
    });
}

//metodo eliminar - DELETE 

tableCat.addEventListener('click',(e)=>{
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
        deleteCategoria(id);
    }
}



//metodo insertar

const formInsert=document.querySelector('#insertForm');

formInsert.addEventListener('submit',(e)=>{
    insert(e);
})

const insert=(e)=>{
    e.preventDefault();
    const imagen=document.querySelector('#imagen').value;
    const categoriaNombre=document.querySelector('#categoriaNombre').value;
    const descripcion=document.querySelector('#descripcion').value;
    const categoria={
        imagen,
        categoriaNombre,
        descripcion
    }
    if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }else{
        return insertarCategorias(categoria);
    }
}

//metodo actualizar o UPDATE
const getCategoria= async(id)=>{
    const data=await getOneCategoria(id);
    console.log(data);
    const {categoriaNombre,descripcion,imagen}=data;
    document.querySelector('#categoriaNombreUpdate').value= categoriaNombre;
    document.querySelector('#descripcionUpdate').value= descripcion;
    document.querySelector('#imagenUpdate').value= imagen;
    
}
const updateForm=document.querySelector('#updateForm');

updateForm.addEventListener('submit',(e)=>{
    console.log(2);
    e.preventDefault();
    updateCa();
})

function updateCa(){
    const categoriaNombre=document.querySelector('#categoriaNombreUpdate').value;
    const descripcion=document.querySelector('#descripcionUpdate').value;
    const imagen=document.querySelector('#imagenUpdate').value;

    const categoria={
        categoriaNombre,
        descripcion,
        imagen
    } 
   if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }else{
        return updateCategoria(categoria,id);
    }  
}


function validation(obj) {
    return !Object.values(obj).every(element=>element !== '')
}
