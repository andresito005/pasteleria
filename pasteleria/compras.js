// Variables globales
let carrito = [];

// Función para agregar un curso al carrito
function agregarCurso(e) {
    e.preventDefault();

    // Obtener el curso
    const curso = {
        id: e.target.getAttribute('data-id'),
        nombre: e.target.parentElement.querySelector('h4').textContent,
        precio: e.target.parentElement.querySelector('.precio span').textContent,
        imagen: e.target.parentElement.parentElement.querySelector('.imagen-curso').src,
        cantidad: 1
    };

    // Verificar si el curso ya está en el carrito
    const existe = carrito.some(c => c.id === curso.id);
    if (existe) {
        // Incrementar la cantidad
        carrito = carrito.map(c => {
            if (c.id === curso.id) {
                c.cantidad++;
                return c;
            } else {
                return c;
            }
        });
    } else {
        // Agregar el curso al carrito
        carrito.push(curso);
    }

    // Actualizar el carrito
    mostrarCarrito();
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const listaCarrito = document.querySelector('#lista-carrito tbody');
    listaCarrito.innerHTML = '';

    carrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${curso.imagen}" width="100"></td>
            <td>${curso.nombre}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
        `;
        listaCarrito.appendChild(row);
    });

    // Actualizar el total
    actualizarTotal();

    // Agregar eventos para eliminar cursos
    const botonesEliminar = document.querySelectorAll('.borrar-curso');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarCurso);
    });
}

// Función para eliminar un curso del carrito
function eliminarCurso(e) {
    e.preventDefault();
    const cursoId = e.target.getAttribute('data-id');

    // Filtrar el carrito
    carrito = carrito.filter(curso => curso.id !== cursoId);

    // Actualizar el carrito
    mostrarCarrito();
}

// Función para actualizar el total del carrito
function actualizarTotal() {
    const total = carrito.reduce((acc, curso) => acc + (parseFloat(curso.precio.replace('$', '')) * curso.cantidad), 0);
    const totalCarrito = document.querySelector('#total-carrito');
    totalCarrito.innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}`;
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');
    agregarCarritoButtons.forEach(button => {
        button.addEventListener('click', agregarCurso);
    });

    const vaciarCarritoButton = document.querySelector('#vaciar-carrito');
    vaciarCarritoButton.addEventListener('click', vaciarCarrito);
});