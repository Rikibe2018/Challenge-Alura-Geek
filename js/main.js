import { crearProductosAPI } from "./crearProducto.js"
import { mostrarProductosAPI } from "./mostrarProductos.js";
import { tiposError, mensajes } from './customErrors.js';

let formateador = new Intl.NumberFormat('eng-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
});



await mostrarProductosAPI.listarProductos();
await mostrarProductosAPI.iconosDelete();

const camposFormulario = document.querySelectorAll("[required]");

camposFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => verificarCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault);
});

function verificarCampo(campo) {
    let mensaje = "";
    campo.setCustomValidity('');

    if (campo.name == 'precio') {
        let valor = formateador.format(campo.value);
        valor = valor.substring(1);
       // console.log(valor);
        campo.value = valor;

    }

    tiposError.forEach(error => {
        if (campo.name == 'precio' && campo.value == 0) {
            campo.setCustomValidity("El precio no puede ser 0")
        }


        if (campo.validity[error]) {
            mensaje = mensajes[campo.name][error]
        }

    })
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    mensajeError.textContent = mensaje
}

function limpiarFormulario() {
    formulario.reset();
    camposFormulario.forEach((campo) => {
        campo.setCustomValidity('');
        const mensajeError = campo.parentNode.querySelector(".mensaje-error");
        mensajeError.textContent = ''
    });
}

const formulario = document.querySelector('[data-formulario]');
const botonLimpiar = document.querySelector('[data-boton-limpiar]');

formulario.addEventListener('submit',async (e) => {
    e.preventDefault();
    await crearProductosAPI.crearProducto(e);
   // showAlert();
});


botonLimpiar.addEventListener('click', () => {
    limpiarFormulario();
});

