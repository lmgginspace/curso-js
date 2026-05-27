Preguntas para el README:

1. ¿Por qué tiene sentido separar los datos (videojuegos.js) de las funciones
(catalogo.js)?
Separar responsabilidades.

2. ¿Qué devuelve juegosDisponibles si ningún juego tiene disponible: true?
Cero.

3. ¿Cómo modificarías buscarPorGenero para que no distinga entre
mayúsculas y minúsculas?
Podríamos pasar las dos cadenas (la del juego y la suministrada a la función) a mayúsculas o minúsculas antes de comparar.