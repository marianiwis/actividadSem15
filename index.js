// Funcionalidad del buscador
document.getElementById('searchForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita recargar la página
    const query = event.target.querySelector('input').value.trim().toLowerCase();

    if (query) {
        // Aquí puedes manejar la búsqueda
        // Por ejemplo, redirigir a otra página con el término de búsqueda
        alert(`Buscando: ${query}`); // Alerta con la búsqueda
        // Redirigir a la página de resultados de búsqueda
        // window.location.href = `results.html?search=${encodeURIComponent(query)}`;
    } else {
        alert('Por favor, ingresa un término de búsqueda.');
    }
});
