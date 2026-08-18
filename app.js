const obtenerConsejo = async () => {
    try {
        // Deshabilitamos el botón mientras carga para evitar múltiples clics
        // TODO: (opcional pero recomendado) deshabilitar el botón
        boton.disabled = true;
        // Mostramos un texto de carga
        //TODO: (opcional) puedes cambiar el texto del párrafo a mientras se carga
        textoConsejo.textContent = 'Cargando consejo...';

        // 2.1 Utiliza 'fetch' para llamar a la API. Recuerda usar 'await' ya que fetch devuelve una promesa.
        // TODO: const respuesta = ...
        const respuesta = await fetch('https://api.adviceslip.com/advice');
        
        // 2.2 Convierte la respuesta a formato JSON. También requiere 'await' ya que es una promesa.
        // TODO: const data = ...
        const data = await respuesta.json();
        
        // 2.3 Extrae el consejo. (La API devuelve el texto dentro de data.slip.advice)
        // TODO: const consejo = ...
        const consejo = data.slip.advice;

        // 2.4 Muestra el consejo en el HTML usando Template Literals (``)
        // TODO: textoConsejo.textContent = ...
        textoConsejo.textContent = consejo;
        
    } catch (error) {
        // Qué pasa si hay un error (ej. el usuario se queda sin internet)
        // TODO: console.error...
        console.error('Error al obtener el consejo:', error);
        // TODO: text.textcontent = ...
        textoConsejo.textContent = 'Oops! No pudimos obtener el consejo. Intenta de nuevo.';
    } finally {
        // El bloque finally se ejecuta SIEMPRE, haya error o no.
        // Aquí volvemos a habilitar el botón para que puedan pedir otro consejo.
        // TODO: boton.disabled ...
        boton.disabled = false;

    }
};

// Conectamos el botón con la función
// Utilizamos addEventListener para escuchar el evento de 'clic' en el botón

// TODO: boton.addEventListener...
boton.addEventListener('click', obtenerConsejo);