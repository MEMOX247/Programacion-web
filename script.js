// Variables globales
let carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  
  actualizarCarrito();
}

// Función para actualizar el contenido del carrito en el HTML
function actualizarCarrito() {
  const itemsCarrito = document.getElementById('items-carrito');
  const totalCarrito = document.getElementById('total-carrito');
  
  // Limpiar el contenido actual del carrito
  itemsCarrito.innerHTML = '';
  
  // Actualizar los elementos del carrito
  carrito.forEach((producto) => {
    const li = document.createElement('li');
    li.innerText = `${producto.nombre} - $${producto.precio}`;
    itemsCarrito.appendChild(li);
  });
  
  // Actualizar el total del carrito
  totalCarrito.innerText = total;
}



// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    const productoEliminado = carrito.splice(index, 1)[0];
    total -= productoEliminado.precio;
    
    actualizarCarrito();
  }
