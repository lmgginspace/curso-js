import { alumnos, crearTextoAlumno } from "./alumnos.js";

const contenedor = document.getElementById("contenedor");

alumnos.forEach(alumno => {
    const texto = crearTextoAlumno(alumno);
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    contenedor.appendChild(parrafo);
});