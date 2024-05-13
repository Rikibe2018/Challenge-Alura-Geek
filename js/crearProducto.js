import { conexionAPI } from "./conexionAPI.js";

async function crearProducto(evento) {

    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {

        await conexionAPI.agregarProductos(nombre, precio, imagen);
        alert('Producto Ingresado con exito!!!!!');
        // llamar toast
    } catch (e) {
        alert(e)
        //llamar toast
    }


}


export const crearProductosAPI = {
    crearProducto,

}