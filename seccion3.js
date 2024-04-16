export const crearSeccionInnovacion = () => {
    const seccion = document.getElementById('seccion3');
    const boton = document.createElement('button');
    boton.textContent = 'Más sobre innovación';
    boton.onclick = () => {
        if (!document.getElementById('info-innovacion')) {
            const info = document.createElement('div');
            info.id = 'info-innovacion';
            info.innerHTML = `
            <h3>El Futuro Hoy: Descubrimientos y Desarrollos Recientes</h3>
            <p>El CES 2024 ha revelado innovaciones asombrosas como televisiones transparentes y dispositivos que integran la inteligencia artificial en la vida cotidiana. La sostenibilidad y el diseño tecnológico inclusivo son tendencias clave, junto con avances en salud digital y tecnología agroalimentaria.</p>
            <p>Las tecnologías emergentes como la edición genética y los sistemas geotérmicos mejorados prometen transformar sectores enteros, desde la medicina hasta la energía limpia.</p>
        `;
            seccion.appendChild(info);
        }
    };
    seccion.appendChild(boton);
};
