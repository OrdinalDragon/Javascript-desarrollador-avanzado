import './style.css'

console.warn('// ! Formas de mostrar información en la consola');

console.log('// Mensaje informativo'); // clg
console.warn('// ! Mensaje de advertencia'); // cwa
console.error('// ! Mensaje de error'); // cer

console.warn('// ! Hacer comentarios');

// Un comentario en línea 

/* 
Un 
comentario
multi
línea
*/

// Extensión Better comments

/*
! Esto es un comentario un rojo
? Esto es un comentario en azul
TODO Esto es un comentario en naranja
* Esto es un comentario en verde
// Esto es un comentario tachado
*/

console.warn('// ! Concatenación');

// ! concatenación tradicional

const nombre = 'Maxi'
const mensaje = 'Hola, ' + nombre + ' bienvenido!'
console.log(mensaje);

// Concatenación con template string (Templates literales)

const otroMensaje = `Hola, ${nombre} bienvenido!`
console.log(otroMensaje);

console.warn('// ! Variables tipos primitivos');

// * string (cadenas de caracteres)
// * number (Enteros y los decimales)
// * bollean (verdadero y falso -> true | false)
// * undefined (variable sin dato aún)

let x // creo una variable y no le asigno nada
console.log(x) // undefined
console.log(typeof x); // undefined

// ---------------------------

console.warn('// ! Variables tipos objeto');

// * objetos (respresentan datos más complejos, son datos agrupados)
// * arrays (arreglos) (Es una estructura de datos indexada)
// * null

let usuario = null // expliciamente está vacío
console.log(typeof usuario); // object

// * undefined -> todavía no tiene valor
// * null -> explícitamente vacío

// ---------------------------

console.warn('Tipo de dato Symbol')
// Existen para resolver un problema concreto. Colisiones de nombres y propiedes ocultas.

const a = Symbol()
const b = Symbol()

console.log(a)
console.log(typeof a)

console.log(a === b) // false

console.warn('// ! Evitar colisiones');

const cliente = {
  nombre: 'Maxi'
}

cliente.id = 123

console.log(cliente);

const ID = Symbol('id') // Nadie más puede pisar esta propiedad. No hay riesgo de colisión. Es único.

cliente[ID] = 123

console.log(cliente);

// Otro ejemplo para entender lo de evitar colisiones

const id = 'id'
const s1 = Symbol(id)
const s2 = Symbol(id)

console.log(s1 === s2) // false

// Mismo texto
// Mismo 'id'
// distintos Symbols

// ¿Por qué cada llamada a Symbol() crea una nueva identidad, irrepetible, garantizada por el motor Javascript

console.warn('// ! Propiedades ocultas')

// Cuando recorra el objeto no las voy a ver

// for...in
// JSON.stringify()
// Object.keys()

const secreto = Symbol('secreto')

const obj = {
  nombre: 'Maxi',
  [secreto]: 'dato interno'
}

for (const clave in obj) {
  console.log(clave) /* Solo veo nombre */
}

console.log(Object.keys(obj)) // ['nombre']

console.warn('// ! Ver propiedades ocultas');

const simbolo = Object.getOwnPropertySymbols(obj)
console.log(simbolo.length > 0) // true
console.log(simbolo);

console.warn('// ! Me muestra los claves ocultas y el resto')

console.log(Reflect.ownKeys(obj))

console.log('// ! bigint -> Números grandes')

const numeroGrande = 9788978979878978975421233n

console.log(numeroGrande)

console.log(typeof numeroGrande) // bigint

console.warn('// ! Constructor de variables (var, let, const)')
// ! NO USAR VAR -> NO USAR EL CONSTRUCTOR VAR

console.warn('// ! CONSTRUCTORES')

/* 
constructor     | var    |   let     |   const
alcance (scope) | global |   local   |   local
redeclarable    | si     |   no      |   no
redefinible     | si     |   si      |   no
*/

console.warn('// ! Alcance (scope)')

const m = 2 // m se ve en todos los ámbitos
console.log(m)
if ( true ) {
  console.log(m)
  if ( true) {
    console.log(m)
    //console.log(n) // No existe en este ámbito
    if ( true ) {
      console.log(m)
      const n = 5
      console.log(n) // Solo acá existe n
    }
  }
}
// console.log(n) // No puedo acceder porque en este scope, no existe n

// ! Si es redeclarable
data = 'Milena'
console.log(data)
var data = 'Pedro'
console.log(data)
var data = 'Ana'
console.log(data)

// ! No es redeclarable
//let dato = 'Pedro'
//let dato = 'Juan'

console.warn('// ! Métodos nativos de los objetos')

const producto = {
  nombre: 'Notebook Gamer',
  categoria: 'Computación',
  disponibilidad: true,
  stock: 20,
  precio: 899.99
}

console.warn('// ! Object.keys()')

console.log(Object.keys(producto))

console.warn('// ! Object.values()')

console.log(Object.values(producto))

console.log('// ! Object.entries()')

console.log(Object.entries(producto))

// Matriz

const matriz = [
  [2, 5], 
  [8, 3]
]

const datos = [
  ['luis', 22, 'acuario'], // persona 1
  ['juana', 33, 'geminis'] // persona 2
]

console.log(matriz)
console.log(datos)

console.warn('// ! .hasOwnProperty()')

console.log(producto.hasOwnProperty('nombre')) // true
console.log(producto.hasOwnProperty('apellido')) // false

for (const key in producto) {
  debugger
  if (!Object.hasOwn(producto, key)) continue;
  
  const element = producto[key];
  console.log(element)
  
}