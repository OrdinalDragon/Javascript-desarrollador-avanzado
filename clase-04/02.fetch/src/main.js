import './style.css'

const url = 'https://jsonplaceholder.typicode.com/posts/'

// fetch API es una herramienta del BOM para peticiones al backend.
/* 
const peticion = fetch(url)
// 1. then(), catch()
// 2. async, await

// 1. then(), catch()

console.log(peticion); // Promise

peticion
    .then(respuesta => {
        console.log(respuesta)
        return respuesta.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    }) */

// Haciendo peticiones asincronicas a FakeStoreApi

/* const urlFakeStore = 'https://fakestoreapi.com/products/'

const peticion = fetch(urlFakeStore)

peticion
    .then((res) => {
        console.log(res)
        return res.json()
    })
    .then((data) => {
        console.log(data)
        data.forEach(prod => {
            console.log(prod)
        })
    })
    .catch(err => {
        console.log(err);
    }) */

/* const urlReqRes = 'https://reqres.in/api/collections/products/records?project_id=27269' */

// fetch(<url>, <options>)
/* const peticion = fetch(urlReqRes, {
    headers: {
        "x-api-key": "pro_de89afe68205d5cdcb8284102aa694adcab5f514b0e29f3604e4ec8c0451a1ce" 
    }
}) */
/* then() | catch() */
/* peticion
    .then(res => {
        console.log(res);
        return res.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    }) */
// Siempre que dentro de una función utilice await mi función tiene que ser asincronica. Uso la palabra reservada async para convertir una función sincronica en asincronica

// otra manera de gestionar las promesas -> async await -> try/catch
/* const peticionReqRes = async () => {

    try {
        console.log(peticion)
        const res = await peticion
        console.log(res)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

peticionReqRes() */

// ! CRUD completo
// https://vite.dev/guide/env-and-mode
const apiProductos = import.meta.env.VITE_API_PRODUCTOS
console.log(apiProductos);

// CRUD
// C-> Create -> Método/verbo POST
// R-> READ -> Método/verbo GET
// U-> UPDATE -> Método/verbo PUT - PATCH
// D-> DELETE -> Método/verbo DELETE

/* // PATCH
const usuario = {
    nombre: 'MAXI',
    apellido: 'Principe',
    rol: 'Docente',
    correo: 'maxi@gmail.com'
}

// > envio objeto completo
const usuario = {
    apellido: 'Principe',
} */

    