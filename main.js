import { crearSeccionActualidad } from './seccion1.js';
import { crearSeccionTecnologia } from './seccion2.js';
import { crearSeccionInnovacion } from './seccion3.js';

document.addEventListener('DOMContentLoaded', () => {
    crearSeccionActualidad();
    crearSeccionTecnologia();
    crearSeccionInnovacion();
    agregarEstilos();
});

const agregarEstilos = () => {
    const estilo = document.createElement('style');
    estilo.textContent = `
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        div {
            margin: 10px;
            padding: 20px;
            border-radius: 5px;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h2, h3 {
            color: #333;
        }
        p {
            color: #666;
        }
        button {
            background-color: #008CBA;
            color: white;
            padding: 10px 20px;
            margin: 10px 0;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #005f73;
        }
    `;
    document.head.appendChild(estilo);
};
