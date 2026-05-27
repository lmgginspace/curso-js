export function saludar(nombre)
{
    return `Hola, ${nombre}.`;
}

export function despedirse(nombre)
{
    return `Hasta luego, ${nombre}.`;
}

export function bienvenidaCurso(nombre, curso)
{
    return `Bienvenido/a, ${nombre}. Empieza el curso de ${curso}.`;
}

// ----

export function crearMensajePersonalizado(nombre, accion, lugar)
{
    return `${nombre} va a ${accion} en ${lugar}.`;
}