Preguntas para el README:

1. ¿Qué ocurriría si ejecutas el proyecto sin la línea "type": "module"?
Las funciones de JS moderno como import y export no funcionarían.

2. ¿Qué diferencia hay entre console.log(resultado) dentro de la función y usar return?
Console.log muestra algo en consola, pero no hace nada más allá de eso con el valor. Con return devolvemos un valor en una función que podría necesitar aquel que la llama.

3. ¿Cómo importarías solo la función sumar sin importar las demás?
Escribinedo solo el nombre de la función sumar entre las llaves del import.

4. ¿Por qué dividir(20, 0) no lanza un error sino que devuelve un string?
Depende de como queramos diseñar el comportamiento de la división para ese caso. Bien podríamos haber lanzado una excepción que requiriese un try-catch en la parte del llamante, pero se ha optado por devolver un texto menos invasivo.