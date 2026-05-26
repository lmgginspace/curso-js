export const alumnos = [
    { id: 1, nombre: "Luis", edad: 35, curso: "Programación", activo: true },
    { id: 2, nombre: "María", edad: 22, curso: "Diseño", activo: true },
    { id: 3, nombre: "Pedro", edad: 19, curso: "Marketing", activo: false },
    { id: 4, nombre: "Ana", edad: 21, curso: "Recursos Humanos", activo: true },
    { id: 5, nombre: "Miguel", edad: 23, curso: "Ventas", activo: false }
];

export function crearTextoAlumno(alumno) {
    return alumno.activo
        ? `${alumno.nombre} tiene ${alumno.edad} años y estaba en el curso de ${alumno.curso}. Ya no está en activo.`
        : `${alumno.nombre} tiene ${alumno.edad} años y está actualemtne en el curso de ${alumno.curso}.`;
}
