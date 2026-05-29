import './style.css'

console.warn('// ! Crear elementos de DOM')

const contenedorPrincipal = document.getElementById('contenedor-principal')

const article = document.createElement('article')
article.textContent = "Soy un articulo"
article.classList.add('w-50', 'h-30', 'bg-red-600', 'text-center', 'text-white')
contenedorPrincipal.appendChild(article)

// Eliminar un nodo html

article.remove()

contenedorPrincipal.appendChild(article)

// Eventos

const cuadroDeTexto = document.querySelector('input')
console.log(cuadroDeTexto)

cuadroDeTexto.setAttribute('id', '5')
cuadroDeTexto.classList.add('bg-green-600')