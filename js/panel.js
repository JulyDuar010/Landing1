// Archivo panel.js

function mostrarSeccion(seccion) {
    const claveCorrecta = "pepe23";
    const ingresoClave = prompt("Ingrese la clave:");

    if (ingresoClave === claveCorrecta) {
        window.location.href = seccion;
    } else {
        alert("Clave incorrecta. Acceso denegado.");
    }
}
