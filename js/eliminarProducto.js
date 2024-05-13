import { conexionAPI } from "./conexionAPI.js";

async function eliminarProducto(evento) {
    var id = evento.target.id;
    var respuesta = confirm('Desea Eliminar este Producto')
    if (respuesta) {
        await conexionAPI.eliminarProductos(id).then(response => {
            if (response.ok) {
                alert('Producto Eliminado')
            } else {
                throw new Error("Ha ocurrido un error en eliminar Producto");
            }
        })
    }
}


export const eliminarApi = {
    eliminarProducto
}