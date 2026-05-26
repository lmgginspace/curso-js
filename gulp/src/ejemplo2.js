// Segundo ejemplo de archivo JS para comprobar concatenación con Gulp

// Función simple de saludo
function saludar(nombre) {
  return `Hola, ${nombre}! Este es el segundo archivo.`;
}

// Exportar para pruebas de importación y concatenación
export function obtenerSaludo() {
  return saludar("Mundo");
}

// Variable que se usará en el bundle final
export const mensajeExtra = "Este mensaje viene del segundo archivo.";
