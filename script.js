
// // Variables globales
// let carrito = [];
// let total = 0;

// // Función para agregar un producto al carrito
// function agregarAlCarrito(nombre, precio) {
//   carrito.push({ nombre, precio });
//   total += precio;
  
//   actualizarCarrito();
// }

// // Función para actualizar el contenido del carrito en el HTML
// function actualizarCarrito() {
//   const itemsCarrito = document.getElementById('items-carrito');
//   const totalCarrito = document.getElementById('total-carrito');

//   // Limpiar el contenido previo del carrito
//   itemsCarrito.innerHTML = '';
  
//   // Actualizar los elementos del carrito
//   carrito.forEach((producto, index) => {
//     const li = document.createElement('li');
//     li.innerText = `${producto.nombre} - $${producto.precio}`;
    
//     const botonEliminar = document.createElement('button');
//     botonEliminar.innerText = ' - ';
//     botonEliminar.addEventListener('click', () => {
//       eliminarDelCarrito(index);
//     });
    
//     li.appendChild(botonEliminar);
//     itemsCarrito.appendChild(li);
//   });



//   // Actualizar el total del carrito
//   totalCarrito.innerText = total;
// }

// function eliminarDelCarrito(index) {
//   const productoEliminado = carrito.splice(index, 1)[0];
//   total -= productoEliminado.precio;
    
//   actualizarCarrito();
// }


// Variables globales
let carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  
  actualizarCarrito();
  
  // Guardar carrito en localStorage
  guardarCarritoEnLocalStorage();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
  const producto = carrito[index];
  total -= producto.precio;
  carrito.splice(index, 1);
  
  actualizarCarrito();
  
  // Guardar carrito en localStorage
  guardarCarritoEnLocalStorage();
}

// Función para actualizar el contenido del carrito en el HTML
function actualizarCarrito() {
  const itemsCarrito = document.getElementById('items-carrito');
  const totalCarrito = document.getElementById('total-carrito');

  // Limpiar el contenido previo del carrito
  itemsCarrito.innerHTML = '';
  
  // Actualizar los elementos del carrito
  carrito.forEach((producto, index) => {
    const li = document.createElement('li');
    li.innerText = `${producto.nombre} - $${producto.precio}`;
    
    const botonEliminar = document.createElement('button');
    botonEliminar.innerText = ' - ';
    botonEliminar.addEventListener('click', () => {
      eliminarDelCarrito(index);
    });
    
    li.appendChild(botonEliminar);
    itemsCarrito.appendChild(li);
  });
  
  // Actualizar el total del carrito
  totalCarrito.textContent = total.toString();
}

// Función para guardar el carrito en localStorage
function guardarCarritoEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  localStorage.setItem('total', total);
}

// Función para obtener el carrito desde localStorage
function obtenerCarritoDeLocalStorage() {
  const carritoGuardado = localStorage.getItem('carrito');
  const totalGuardado = localStorage.getItem('total');
  
  if (carritoGuardado && totalGuardado) {
    carrito = JSON.parse(carritoGuardado);
    total = parseInt(totalGuardado);
    
    // Actualizar el carrito en el HTML
    actualizarCarrito();
  }
}

// Llamar a la función para obtener el carrito desde localStorage al cargar la página
window.addEventListener('load', obtenerCarritoDeLocalStorage);

