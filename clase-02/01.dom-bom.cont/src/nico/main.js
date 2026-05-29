const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(e) {
    // Evitar recarga de página
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = document.getElementById('edad').value.trim();

    // Resetear clases y ocultar el mensaje anterior
    resultado.className = "hidden mt-4 p-3 rounded-lg text-sm text-center font-medium";
    resultado.textContent = '';

    // Validar los campos vacíos
    if (nombre === '' || email === '' || edad === '') {
        resultado.textContent = 'Podrias por favor completar todos los campos';
        resultado.classList.remove('hidden');
        resultado.classList.add('bg-red-100', 'text-red-700', 'border', 'border-red-200');
        return;
    }

    // Validar la edad lógica
    if (parseInt(edad) <= 0 || isNaN(edad)) {
        resultado.textContent = 'Ingresa tu edad con numeros por favor';
        resultado.classList.remove('hidden');
        resultado.classList.add('bg-red-100', 'text-red-700', 'border', 'border-red-200');
        return;
    }

    // Mostrar que se envío correctamente
    resultado.textContent = 'Exito! Has completado el formulario, avanzaste de nivel de usuario';
    resultado.classList.remove('hidden');
    resultado.classList.add('bg-green-100', 'text-green-700', 'border', 'border-green-200');

    // Limpiar campos del formulario
    formulario.reset();
});