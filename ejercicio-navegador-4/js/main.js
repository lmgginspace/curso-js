import { celsiusAFahrenheit, fahrenheitACelsius } from './temperatura.js';

// Agregar eventos a los botones.
//document.querySelector('#celsius-convert').addEventListener('click', convertirCelsiusAFahrenheit);
//document.querySelector('#fahrenheit-convert').addEventListener('click', convertirFahrenheitACelsius);

document.querySelector('#celsius-input').addEventListener('input', convertirCelsiusAFahrenheit);
document.querySelector('#fahrenheit-input').addEventListener('input', convertirFahrenheitACelsius);

// Celsius -> Fahrenheit.
function convertirCelsiusAFahrenheit() {
    const inputCelsius = document.querySelector('#celsius-input');
    const resultadoCelsius = document.querySelector('#celsius-result');

    let celsius = parseFloat(inputCelsius.value);

    if (isNaN(celsius)) {
        resultadoCelsius.textContent = 'Introduce un número válido.';
    } else {
        const fahrenheit = celsiusAFahrenheit(celsius);
        resultadoCelsius.textContent = `${fahrenheit.toFixed(2)} °F.`;
    }
}

// Fahrenheit -> Celsius.
function convertirFahrenheitACelsius() {
    const inputFahrenheit = document.querySelector('#fahrenheit-input');
    const resultadoFahrenheit = document.querySelector('#fahrenheit-result');

    let fahrenheit = parseFloat(inputFahrenheit.value);

    if (isNaN(fahrenheit)) {
        resultadoFahrenheit.textContent = 'Introduce un número válido.';
    } else {
        const celsius = fahrenheitACelsius(fahrenheit);
        resultadoFahrenheit.textContent = `${celsius.toFixed(2)} °C.`;
    }
}