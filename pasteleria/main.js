// Archivo: main.js

// Función para cambiar el fondo de la sección y hacer scroll a la sección
function cambiarFondoYRedirigir(sectionId, color) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.backgroundColor = color;
        section.scrollIntoView({ behavior: "smooth" }); // Scroll suave a la sección
    }
}

// Evento click en enlaces de navegación para cambiar el fondo y redirigir
document.querySelector('.musica a').addEventListener('click', function(event) {
    event.preventDefault();
    cambiarFondoYRedirigir('seccion1', '#043d05');
});

document.querySelector('.juegos a').addEventListener('click', function(event) {
    event.preventDefault();
    cambiarFondoYRedirigir('seccion2', '#524e05');
});

document.querySelector('.contactos a').addEventListener('click', function(event) {
    event.preventDefault();
    cambiarFondoYRedirigir('contacto', '#5a5555');
});

// Evento mouseover en los títulos de las secciones (eliminado alert)
document.querySelector('#seccion1 .h21').addEventListener('mouseover', function() {
    // alert('Estás en la sección de ponques'); // Eliminado
});

document.querySelector('#seccion2 .h2').addEventListener('mouseover', function() {
    // alert('Estás en la sección de postres'); // Eliminado
});

// Creación de un formulario de contacto dinámico
const formulario = document.createElement('form');
formulario.innerHTML = `
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br><br>
    <button type="button" id="enviar">Enviar</button>
`;
document.getElementById('contacto').appendChild(formulario);

// Evento click en el botón de enviar
document.getElementById('enviar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const destinatario = 'gapf5@hotmail.com';
    const asunto = 'Mensaje de contacto';
    const cuerpo = `Nombre: ${nombre}\nEmail: ${email}`;
    
    // Abre el cliente de correo con el destinatario, asunto y cuerpo prellenados
    window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    
    // Limpia el formulario después de enviar
    formulario.reset();
});

// Función para mostrar alerta al cargar la página
window.onload = function() {
    alert("Estás en la página inicial");
};

function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');

    document.getElementById("reloj").textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);