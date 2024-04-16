export const crearSeccionTecnologia = () => {
    const seccion = document.getElementById('seccion2');
    const boton = document.createElement('button');
    boton.textContent = 'Más sobre tecnología';
    boton.onclick = () => {
        if (!document.getElementById('info-tecnologia')) {
            const info = document.createElement('div');
            info.id = 'info-tecnologia';
            info.innerHTML = `
            <h3>Innovación y Avance: La Era de la Tecnología en 2024</h3>
            <p>La inteligencia artificial generativa lidera la innovación tecnológica, transformando la creación de contenido y la resolución de problemas complejos. La ciberseguridad se convierte en una prioridad ante la sofisticación de los ciberataques.</p>
            <p>La sostenibilidad tecnológica gana terreno en la lucha contra el cambio climático, y el eLearning continúa revolucionando la educación. Las experiencias inmersivas a través de la realidad virtual y aumentada abren nuevas dimensiones en el entretenimiento y la formación profesional.</p>
        `;
            seccion.appendChild(info);
        }
    };
    seccion.appendChild(boton);
};
