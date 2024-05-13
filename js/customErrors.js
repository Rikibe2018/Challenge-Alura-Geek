

export const tiposError = [
    "valueMissing", 
    "typeMissmatch", 
    "patternMissmatch", 
    "tooShort", 
    "customError"
];

export const mensajes = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un nombre válido.",
        tooShort: "Por favor, ingrese un nombre válido.",
    },
    precio: {
        valueMissing: "El campo precio no puede estar vacío.",
        typeMismatch: "Por favor, ingrese un precio válido.",
        patternMismatch: "Por favor, solamente numeros",
        tooShort: "Por favor, ingrese un precio válido.",
        customError: "El Precio no puede ser Cero.",
    },
    imagen: {
        valueMissing: "El campo imagen no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un path de imagen válido.",
        customError: "Imagen no Existe",

    },
   
};
