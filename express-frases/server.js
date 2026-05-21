import express from 'express';

import { frases } from './data/frases.js';
import { elegirAleatorio } from './utils/random.js';

const app = express();
const port = 3000;

app.get('/', (req, res) =>
{
    const frase = elegirAleatorio(frases);
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <body>
            <h1>Frases aleatorias</h1>
            <p>${frase}</p>
            <a href="/">Otra frase</a>
        </body>
        </html>
    `);
});

app.listen(port, () =>
{
    console.log(`Servidor en https://localhost:${port}`);
});