export const crearSeccionActualidad = () => {
    const seccion = document.getElementById('seccion1');
    const boton = document.createElement('button');
    boton.textContent = 'Más sobre actualidad';
    boton.onclick = () => {
        if (!document.getElementById('info-actualidad')) {
            const info = document.createElement('div');
            info.id = 'info-actualidad'; // Asigna un id único
            info.innerHTML = `
            <h3>Elecciones y Conflicto: El Panorama Global en 2024</h3>
            <p>Este año se caracteriza por un ciclo electoral intenso con elecciones en más de 70 países, marcando un periodo crítico para la democracia global. Los conflictos en Ucrania, Palestina, Sudán y Yemen continúan, representando los mayores desafíos para la paz y la estabilidad internacional.</p>
            <p>La economía mundial enfrenta una desaceleración, con un crecimiento económico débil y el impacto de la crisis china afectando a las economías emergentes. La competición geopolítica y las transiciones verde y digital son temas dominantes, mientras que la seguridad internacional se mantiene como una preocupación constante.</p>
        `;
            seccion.appendChild(info);
        }
    };
    seccion.appendChild(boton);
};
