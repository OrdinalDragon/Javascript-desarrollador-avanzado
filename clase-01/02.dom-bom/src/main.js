import './style.css'


console.warn('// ! dom -> document object model')

console.dir(document)

console.warn('// ! BOM -> Browser Object Model')
// https://developer.mozilla.org/es/docs/Web/API

console.log(window)

// https://3con14.biz/code/_data/js/intro/dom.png
// https://miro.medium.com/v2/1*gRMkpPF9o_hAPGS4iJKCDQ.png

// ECMAScript (Genera los estandares para que Javascript se puede utilizar en todos los navegadores y el backend de la misma manera)

// https://ecma-international.org/

// Javascript no es ECMAScript -> Define el lenguaje Javascripts
// Que el navegador agregar (APIs) -> BOM -> Fetch, Geolocation, HTMLCollection

console.log(window.location.href)

const btnIr = document.getElementById('btn-ir')

console.log(btnIr)

btnIr.addEventListener('click', function() {
    window.location.href = 'https://google.com'
})


console.warn('// ! Selección de elementos en DOM')

console.warn('Tradicionales')

// * getElementById (Mejor que querySelector)
// * getElementsByClassName
// * getElementsByTagName

console.warn('Modernos')

// * querySelector
// * querySelectorAll

// Utilizo todos lo selectores que vengo utilizando en CSS con querySelector

// Si quiero seleccionar un ID -> #
// Si quiero seleccionar un CLASE -> .
// Si quiero seleccionar un TAG -> (nombre tag)

// const tituloPrincipal = document.querySelector('h1')
//const tituloPrincipal = document.querySelector('.text-2xl.text-green-600')
const tituloPrincipal = document.querySelector('#titulo-principal')

console.log(tituloPrincipal);