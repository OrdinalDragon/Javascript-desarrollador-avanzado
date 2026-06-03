import './style.css'

// ! Repaso Promesas

const respuestaConProductos = true // 1. true

// Si la promesa cumple -> Uso el resolve
// Si la promesa no se cumple -> Uso el reject


const promesaObtenerProductos = new Promise((resolve, reject) => {
    if (respuestaConProductos) {
        const listaProductos = [{id: 1}, {id: 2}, {id: 3}]
        resolve(listaProductos)
    } else {
        const error = { ok: false, status: 404, msg: 'No se pudo obtener los productos'}
        reject(error)
    }
})

/* console.log(promesaObtenerProductos); */ // 1. fulfilled (cumplió) // 2. rejected (no se cumplió)
// then(), catch(), finally()
//promesaObtenerProductos // <------ Promise (Promesa) -> a. pending | b. fulfilled | c. rejected

// Chaining <---- encadenamiento de métodos
/* promesaObtenerProductos
    .then((data) => {
        console.log('Then: La promesa se cumplió', data);
    }) // la promesa se cumple -> then() solamente se va a ejecutar cuando la promesa se cumple
    .catch((error) => {
        console.log('Catch: La promesa no se cumplió', error);
    }) // la promesa no se cumplió -> catch() solamente se va a ejecutar cuando la promesa no se cumplió
    .finally(() => {
        console.log('Se ejecuta siempre. Fin');
    }) // El finally se va a ejecutar siempre, tanto si se ejecuta antes el then como el catch */

// async y await (ES8)
// convierto una función sincronica a asincronica usando la palabra async
// await siempre va de la mano del async
const obtenerProductos = async () => {
// la promesa esta en estado pending -> fulfilled o rejected
    try{
        // THEN
            const promesa = await promesaObtenerProductos
            console.log('THEN -> async/await: La promesa se cumplió', promesa);
    } catch {
        // CATCH
        console.log('No se pudió', error);
    }
}

obtenerProductos()

// Bloque de manejo de errores try/catch
/* console.log('Inicio');
try {
    console.log('Paso 1');
    console.log('Paso 2');
    console.log('Paso 3'); // <---- acá hay un error
    console.log('Paso 4');
    console.log('Paso 5');
} catch (error) {
    console.log('No se pudo', error);
} finally {
    console.log('TODO OK');
}
console.log('Fin'); */