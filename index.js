document.addEventListener('DOMContentLoaded', () => {
    const elemento = document.getElementById('miElemento');
    if (elemento) {
        elemento.addEventListener('click', () => {
            console.log('Elemento clickeado');
        });
    } else {
        console.error('Elemento no encontrado');
    }
});
