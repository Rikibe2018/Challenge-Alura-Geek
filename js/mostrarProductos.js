import { conexionAPI } from "./conexionAPI.js";
import {eliminarApi} from './eliminarProducto.js';

const ulProductos = document.querySelector("[data-productos]");

export default function crearCard(nombre, precio, imagen,id) {
    const productos = document.createElement('li');
    productos.className = "card";
    productos.innerHTML = `<img src="${imagen}" alt="imagen del producto"/>
    <div class="card-container--info">
        <p>${nombre}</p>
        <div class="card-container--value">
            <p>\$ ${precio}</p>
            <i class="fa fa-trash-o" style="font-size:24px" data-icon-delete id=${id}></i>
        </div>
    </div>`;
    return productos;
}

async function listarProductos() {
    try {

        const listaProductosAPI = await conexionAPI.conexionDbProductos();
        listaProductosAPI.forEach(productos => {
            ulProductos.appendChild(crearCard(
                productos.nombre.substring(0, 20),
                productos.precio,
                productos.imagen,
                productos.id));
        });

    } catch {
        ulProductos.innerHTML = '<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>'
    }

};

async function iconosDelete() {
    const iconoBorrar = document.querySelectorAll('[data-icon-delete]');
    iconoBorrar.forEach((icono) => {
        icono.addEventListener('click', (e) =>
            eliminarApi.eliminarProducto(e));
    });

}


export const mostrarProductosAPI = {
    listarProductos,
    iconosDelete

}