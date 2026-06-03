import './style.css'


/* -------------------------------------------- */
console.warn('/* Comunicación asincrónica con AJAX */')
/* -------------------------------------------- */

/* --------------------------------------------------- */
/* Comunicación asincrónica con AJAX                   */
/* AJAX: Asyncronous JavaScript and XML                */
/* Un objeto llama XMLHttpRequest (Con eso trabajamos) */
/* --------------------------------------------------- */

// XMLHttpRequest (BOM) -> Hacer peticiones y recibir respuesta bajo el protoloco http -> callback
// axios (Librería) -> Hacer peticiones y recibir respuestas -> Utilizar por detrás XMLHttpRequest -> promisas
// fetch (BOM) -> Hacer peticiones y recibir respuesta bajo el protoloco http -> promisas (Azucar sintactica)

// ----> 

// ! XML (Archivo de texto plano)
// * Nos permite transmitir información de manera estandar y liviana del backend al frontend y viceversa

// https://es.wikipedia.org/wiki/Extensible_Markup_Language

// ! JSON (Archivo de texto plano)
// * JavaScript Object Notation
// * Nos permite transmitir información de manera estandar y liviano del backend al frontend y viceversa

// https://es.wikipedia.org/wiki/JSON
// https://www.json.org/json-en.html

// ! PROTOCOLO HTTP

// https://reparartuordenador.com/como-funciona-el-protocolo-http

// ! Métodos (verbos) HTTP

// Además de los métodos disponibles en los formularios (GET y POST)
// ABM (acronimo) ->  ALTA,             MODIFICACIÓN | BAJA
// CRUD (acronimo) -> C:CREATE | R:READ | U:UPDATE | D:DELETE
// M.HTTP ->          POST     | GET    | PUT      | DELETE

// https://developer.mozilla.org/es/docs/Web/HTTP/Methods

// https://www.atatus.com/glossary/content/images/2021/07/CRUD.jpeg

// ! Status HTTP
// Es la respuesta que nos va a entregar el backend. El resultado de la comunicación.

// * Respuesta informativas (100-199)
// * Respuesta satisfactorias (200-299)
// * Redirecciones (300-399)
// * Errores de clientes (400-499)
// * y errores de los servidores (500-599)

// https://developer.mozilla.org/es/docs/Web/HTTP/Status
// https://http.cat/
// https://httpstatusdogs.com/
// https://www.youtube.com/shorts/TtYLv8COtJk

// ! Headers HTTP
// Dentro del protocolo HTTP los archivos que llegan por el protocolo http va a tener una cabecera de petición y una cabecera de respuesta

// https://developer.mozilla.org/es/docs/Web/HTTP/Headers

// API Productos (Endpoints -> Rutas -> Points)

// GET -> CRUD -> R:READ -> http://localhost:8080/productos
// POST -> CRUD -> C:CREATE -> http://localhost:8080/productos + el nuevo producto
// PUT -> CRUD -> U:UPDATE -> http://localhost:8080/productos/id + el producto editado
// DELETE -> CRUD -> D:DELETE -> http://localhost:8080/productos/id

// Sincronico -> Secuencial

/* console.log('Inicio')
console.log('Tarea/Proceso 1'); for (let index = 0; index < 1e9; index++) {}; // 10_000_000_000
console.log('Tarea/Proceso 2'); for (let index = 0; index < 1e9; index++) {}; // 10_000_000_000
console.log('Tarea/Proceso 3'); for (let index = 0; index < 1e9; index++) {}; // 10_000_000_000
console.log('Tarea/Proceso 4'); for (let index = 0; index < 1e9; index++) {}; // 10_000_000_000
console.log('Tarea/Proceso 5'); for (let index = 0; index < 1e9; index++) {}; // 10_000_000_000
console.log('Tarea/Proceso 6'); for (let index = 0; index < 1e9; index++) {}; // 10_000_000_000
console.log('Fin') */

// Asincronico -> No secuencial
/* console.log('Inicio') // 1
let data // 2
setTimeout(() => { // 3
    console.log('Se muestra luego de 15 segundos')
    data = 'Maxi' // 4
    console.log(data) // 5
    console.log('Fin') // 6
}, 15000) // 15 segundos 
console.log(data) */

// setTimeout(cb, milisegundos)
/* console.log('Inicio')
setTimeout(() => {
    console.log('En 5 segundos voy a aparecer...')
    console.log(new Date().toLocaleTimeString())
    console.log('Fin')
}, 5000); // 5 segundos */

/* Callback hell -> Piramide de la perdición -> Aparecen promesas por este incoveniente */


console.warn('// ! PROMISES')
// Las promesas nos ayudan a gestionar de una manera más amable la asincronia. Remplaza a los callbacks
// Las promesas están dentro del lenguaje de Javascript

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises

// Fetch -> Web API (Utiliza promesas)
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

/* 
Una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. 
*/ 

// Una promesa tiene tres estados:

// 1. Pendiente (pending): está en proceso.
// 2. Se cumplió (fulfilled): se resolvió exitosamente.
// 3. No se Cumplió -> Rechazada (rejected): ocurrió un error.
// ---------------------------
// Promise(function(){}) <--- una función ejecutada pasada como argumento de otra
// resolve y reject son referencias de funciones
// resolve -> Se usa cuando quiero que se cumpla la promesa
// reject -> Se usa cuando quiero que no se cumpla promesa

/* 
const promesa = new Promise(function(resolve, reject) {
    console.log(resolve) // <--- función que entrega el Promise cuando lo instancio
    console.log(reject) // <--- función que entrega el Promise cuando lo instancio
})
console.log(promesa) */

/*  */

/* // ! Una promesa que nunca se cumple
const promesa = new Promise(function(resolve, reject) {
    reject()
})

console.log(promesa) */
/* // ! Una promesa que siempre se cumple

const promesa = new Promise(function(resolve, reject) {
    resolve()
}) 

console.log(promesa)
*/

const cumpleBeta = true

const promesa = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if ( cumpleBeta ) {
            resolve('Fui al cumple. Cumplí')
        } else {
            reject('No Fui al cumple. Y no se me cae la cara de vergüenza')
        }
    }, 10000) // 10 segundos
})

console.log(promesa)