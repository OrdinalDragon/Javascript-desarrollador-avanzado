import './style.css'

const url = 'https://jsonplaceholder.typicode.com/posts/'

// ! Petición para obtener todos los post
const anterior = () => {
    const peticion = fetch(url)

    peticion
        .then((res) => {
            //console.log(res)
            const info = res.json()
            return info
        })
        .then((data) => {
            console.log(data)
        })

    // ! Petición para obtener un solo post (el 10)
    const urlId = url + 10
    //console.log(urlId)
    const peticionXId = fetch(urlId)

    // console.log(peticionXId) // promesa

    peticionXId
        .then((res) => {
            //console.log(res)
            const promesaJson = res.json()
            return promesaJson
        })
        .then((dataXId) => {
            console.log(dataXId) // post -> id -> 10
        })

        // ! Petición para obtener un solo post (con el id: 10)
        // Los datos del usuario que creo ese post
        const urlUsuario = 'https://jsonplaceholder.typicode.com/users/'
        const urlIdYUsuario = url + 10 // 'https://jsonplaceholder.typicode.com/posts/' + 10
        //console.log(urlIdYUsuario)
        const peticionXIdConUsuario = fetch(urlIdYUsuario)

    //console.log(peticionXId) // promesa

    /* peticionXIdConUsuario
        .then((res) => {
            //console.log(res)
            const promesaJson = res.json()
            return promesaJson
        })
        .then((dataXId) => {
            console.log(dataXId) // post -> id -> 10
            //console.log(dataXId.userId) // id del usuario que creo el post -> usuario -> (id: 1 )

            const urlUsuarioXId = urlUsuario + dataXId.userId
            //console.log(urlUsuarioXId)

            const peticionUsuario = fetch(urlUsuarioXId)

            return peticionUsuario
        })
        .then(resUsuario => {
            //console.log(resUsuario)
            return resUsuario.json()
        })
        .then(dataUsuario => {
            //console.log(dataXId)
            console.log(dataUsuario)
        })
        .catch(err => {
            console.error(err)
        }) */

    // ! Petición async con then y catch 
    peticionXIdConUsuario
        .then((res) => {
            console.log(res)
            if (!res.ok) {
                throw new Error('No se pudo hacer petición para obtener el post')
            }
            return res.json()
        })
        .then((dataXId) => {
            console.log(dataXId) 
            const urlUsuarioXId = urlUsuario + dataXId.userId
            return fetch(urlUsuarioXId)
        })
        .then(resUsuario => {
            // console.log(resUsuario)
            if (!resUsuario.ok) {
                throw new Error('No se pudo obtener el usuario relacionado con el post')
            }
            return resUsuario.json()
        })
        .then(dataUsuario => console.log(dataUsuario))
        .catch(err => console.error(err))

// ! Petición async con async y await 

const peticionPostYUsuario = async () => {

    try {
        
        const respuestaPost = await fetch(url + 10)
        //console.log(respuestaPost)

        if (!respuestaPost.ok) {
            throw new Error('No se pudo obtener el post')
        }
        const postId = await respuestaPost.json()
        //console.log(postId)
        //console.log(postId.userId)

        const urlPeticionUsuario = urlUsuario + postId.userId
        //console.log(urlPeticionUsuario)
        const respuestaUser = await fetch(urlPeticionUsuario)
        console.log(respuestaUser)

        if (!respuestaUser.ok) {
            throw new Error('No se pudo obtener el usuario')
        }
        
        const userId = await respuestaUser.json()
        console.log(userId)

        postId.userId = userId
        console.log(postId)
        console.log(postId.title) // título del post
        console.log(postId.userId.name) // nombre del usuario


    } catch (error) {
        console.error(error)
    }


    }

    peticionPostYUsuario()
}

// CRUD -> API REST
// C:CREATE -> Protocolo HTTP -> POST
// R:READ -> Protocolo HTTP -> GET
// U:UPDATE -> Protocolo HTTP -> PUT
// D:DELETE -> Protocolo HTTP -> DELETE

const urlProd = 'http://localhost:8080/productos/'

const getAllProductos = async () => {

    try {
        // url + verbo
        const res = await fetch(urlProd, { method: 'GET'}) // por defecto -> fetch -> petición con el verbo get
        console.log(res)

        /* if ( !res.ok ) {
            if ( res.status === 404 ) throw new Error('Recurso no encontrado')
            if ( res.status === 401 ) throw new Error('No autorizado')
            if ( res.status >= 500 ) throw new Error('Error del servidor')
        } */

        if ( !res.ok ) {
            const error = new Error('No se pudo realizar la petición')
            throw error // break <----- corta la ejecución en el punto en el que se lanza
        }
        // pasear el JSON
        const productos = await res.json()

        if ( !Array.isArray(productos) ) {
            throw new Error('Formato de datos inválido')
        }

        //console.warn(productos)
        return productos
    } catch (error) {
        //console.error(error)
        throw error
    }

}

// DOMContentLoaded -> se va disparar cuando todo el documento html (DOM) este completamente disponible
/* document.addEventListener('DOMContentLoaded', async () => {
    console.log('Me veo cuando el DOM esté completamente cargado')
    try {
        const productos = await getAllProductos()
        console.log(productos)

        productos.forEach(prod => {
            console.log(prod)
        })
    } catch (error) {
        console.error(error)
    }
}) */

/* const getOne = async (id) => {

    try {
        
        const res = await fetch(urlProd + id) // Por defecto en GET
        console.log(res) // obj repuesta
        if ( !res.ok ) {
            throw new Error('No se pudo obtener el producto')
        }

        const producto = await res.json()
        console.log(producto)

    } catch (error) {
        console.error(error)
    }

} */

//getOne('DDzIAiSrOnY') // id: 'DDzIAiSrOnY'

const createProducto = async (productoAGuardar) => {
    
    try {

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productoAGuardar) // convertir el obj de js en un cadena (json)
        }

        const res = await fetch(urlProd, options)

        if ( !res.ok ) {
            throw new Error('No se pudo crear el producto')
        }

        const productoCreadoConId = await res.json()
        console.log(productoCreadoConId)

    } catch (error) {
        console.error(error)        
    }
}

const btnCrear = document.querySelector('#btn-crear')

btnCrear.addEventListener('click', () => {
    createProducto({
        nombre: 'Drone DJI',
        categoria: 'Electro',
        precio: 323
    })
})


const editProducto = async (id, productoEditado) => {

    try {
        
        const options = {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productoEditado)
        }

        const res = await fetch(urlProd + id, options)

        if ( !res.ok ) {
            throw new Error('No se pudo editar el producto')
        }

        const productoActualizado = await res.json()
        console.log(productoActualizado)

    } catch (error) {
        console.error(error)
    }

}

const btnEdit = document.querySelector('#btn-edit')

btnEdit.addEventListener('click', ()=> {
    editProducto("0vxGX3ZVm04", {
        nombre: 'Go Pro 13',
        categoria: 'Electo',
        precio: 1111.22
    })
})

/* const urlMockapi = 'https://6a2321575c610353286abd32.mockapi.io/productos/' */

const deleteProducto = async (id) => {

    try {

        const options = {
            method: 'DELETE'
        }
        //debugger
        // const res = await fetch(urlProd + id, options)
        const res = await fetch(urlMockapi + id, options)

        if ( !res.ok ) {
            throw new Error('No se pudo borrar el producto')
        }

        //debugger
        const productoBorrado = await res.json()
        console.log(productoBorrado)
        
    } catch (error) {
        console.error(error)
    }

}

const btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('borrando...')
    deleteProducto(1)
})

// Función generica para trabajar con todos los metodos http

const peticionAsincronica = async (url, opciones = {}) => {
    try {

        const res = await fetch(url, opciones)

        if (!res.ok) {
            if ( res.status === '404') throw new Error('No encontrado')
            if ( res.status === '401') throw new Error('No autorizado')
            if ( res.status >= '500') throw new Error('Error de servidor')
        }

        const data = await res.json()
        
        return data

    } catch (error) {
        console.log(error)
    }

}

peticionAsincronica('url') // GET
peticionAsincronica('url', {method: 'POST', headfers: {}, body: ''})
peticionAsincronica('url+id', {method: 'PUT', headfers: {}, body: ''})
peticionAsincronica('url+id', {method: 'DELETE', headfers: {}, body: ''})