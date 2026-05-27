export const alumnos = [
    { nombre: "Luis", edad: 35, curso: "Programación", activo: true },
    { nombre: "María", edad: 22, curso: "Diseño", activo: true },
    { nombre: "Pedro", edad: 19, curso: "Marketing", activo: false },
    { nombre: "Ana", edad: 21, curso: "Recursos Humanos", activo: true },
    { nombre: "Miguel", edad: 23, curso: "Ventas", activo: false }
];

export function crearTextoAlumno(alumno) {
    return alumno.activo
        ? `${alumno.nombre} tiene ${alumno.edad} años y estaba en el curso de ${alumno.curso}. Ya no está en activo.`
        : `${alumno.nombre} tiene ${alumno.edad} años y está actualmente en el curso de ${alumno.curso}.`;
}
