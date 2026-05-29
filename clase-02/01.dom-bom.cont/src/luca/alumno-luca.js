const formularioLuca = document.getElementById('formularioLuca')
formularioLuca.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = formularioLuca.nombre.value
    const email = formularioLuca.email.value
    const edad = formularioLuca.edad.value
    formularioLuca.reset()
    if (!nombre || !email || !edad) {
        alert('Todos los campos son obligatorios')
        return
    }
    console.log(nombre)
    const alerta = document.createElement('div')
    alerta.textContent = 'Formulario enviado correctamente'
    alerta.classList.add('bg-green-600', 'text-white', 'p-2', 'rounded', 'mb-2','text-center')
    formularioLuca.prepend(alerta)
    setTimeout(() => {
        alerta.remove()
    }, 3000)
})