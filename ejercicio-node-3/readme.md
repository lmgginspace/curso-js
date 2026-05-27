Preguntas para el README:

1. ¿Qué devuelve notas.length? ¿Para qué lo usas en calcularMedia?
Devuelve el número de elementos que hay en el array. Se usa por que es necesario dividir por el número de elementos para calcular una media.

2. ¿Cómo cambiarías estaAprobado para que el aprobado fuera a partir de 6?
Cambiando la expresión de dicho método por una comparación con 6.

3. ¿Qué pasaría si el array de notas estuviera vacío? ¿Cómo lo gestionarías?
Depende de cómo queramos dieñar su comportamiento con este caso borde. Yo implementaría:
 - Media => undefined (la división por cero produciría un valor indefinido)
 - Nota más alta/baja => undefined (cual sería la nota más baja en un conjunto vacío? 0? Un número negativo? -Inifnito? Creo que mejor dejarlo sin definir).
 - Aprobado => false (nin notas, alguien no puede ser admitido como aprobado)