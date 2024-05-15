
async function conexionDbProductos() {

    const conexion = await fetch('http://localhost:3001/productos');
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function agregarProductos(nombre, precio, imagen, evento) {
    //evento.preventDefault();
    
    const conexion = await fetch('http://localhost:3001/productos', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: crypto.randomUUID,
            nombre: nombre,
            precio: precio,
            imagen: imagen,
        })
    });
    
    if (!conexion.ok) {
        alert("Ha ocurrido un error en agregar Producto")
        throw new Error("Ha ocurrido un error en agregar Producto");
    }
     return conexion; 
}

async function eliminarProductos(ide) {
  
    const conexionDelete = await fetch(`http://localhost:3001/productos/${ide}`,{ 
 
         method: "DELETE",
         headers: { "Content-Type": "application/json" },
     });


     if (!conexionDelete.ok) {
         alert("Ha ocurrido un error en eliminar Producto");
         throw new Error("Ha ocurrido un error en eliminar Producto"); 
        }
        
   
    return 
}

export const conexionAPI = {
    conexionDbProductos,
    agregarProductos,
    eliminarProductos
};

