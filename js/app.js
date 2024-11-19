//importar los metodos del api.js 
import { getpastel, getpastelByID, updatePastels, Deletepastel } from "./api";

document.addEventListener ("DOMContentLoaded", async () => {
    const pastellist = document.getElementById("pastel-list");

    const pastel = await getpastel();
    pastellist.innerHTML = pastel.map(pastel => `
            <div class="col-xs-12 col-sm-6 col-md-3 card">
                <div class="card-body d-flex flex-column justify-content-end">
                    <h5 class="card-title">${pastel.name}</h5>
                    <p class="card-text">${pastel.price}</p>
                    <a onclick="viewPastel(${pastel.id})" class="btn btn-primary">ver más </a>
                </div>
            </div> 
        `).join("");
});

//metodo para ver los detalles del producto cuando damos click en el boton "ver más".
window.viewPastel = async (id) => {
    const pastel = await getpastelByID(id);

    const pastelDetails = `
        <div class="col">
            <h3>${pastel.name}</h3>
            <p>${pastel.description}</p>
            <p>precio: ${pastel.price}</p>
            <button class="btn btn-warning" onclick="enableEdit(${pastel.id})">Editar</button>
            <button class="btn btn-danger" onclick="deleteEdit(${pastel.id})">eliminar</button>
        </div>
    `;
    document.getElementById("pastel-list").innerHTML = pastelDetails;
};

//visitar para editar informacion 
window.enableEdit = async (id) => {
    const pastel = await getpastelByID(id);

    const editform =`
        <div class="row gap-3">
            <input type="number" id="price" value="${pastel.price}">
            <input type="text" id="name" values="${pastel.name}">
            <textarea id=" decription">${pastel.description}</textarea>
            <button class="btn btn-success" onclick="saveEdit(${id})
            ">guardar</button>
        </div> 
    `;
    document.getElementById("pastel-list").innerHTML = editform;
};

//guardar la infomacion actualizada
window.saveEdit = async (id) => {
    const updatePastel = {
        name: document.getElementById("name").value,
        description:document.getElementById("description").value,
        price: parseFloat(document.getElementById("price").value)

    };
    await updatePastels(id, updatePastel); 
    location.reload(); //recarga pagina para ver los cambios
};

//borrar el producto seleccionado
window.Deletepastel = async (id) => {
    await Deletepastel(id);
    location.reload(); //recargar la pagina para ver los cambios
};