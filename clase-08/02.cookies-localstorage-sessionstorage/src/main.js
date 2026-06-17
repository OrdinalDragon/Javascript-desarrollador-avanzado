// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'; // Agrego los scripts de bootstrap
import './style.css';
import Cookies from 'js-cookie';

// Cookies
// Son pequeños archivos que el navegador guarda y se envían automaticamente al servidor dentro del request. Se utilizan para guardar información de sesioón, preferencias de usuario, etc.

// Ocupan 4kb, clave valor, fecha de expiración, dominio, ruta, etc.

// Pueden ser HttpOnly, lo que significa que no pueden ser accedidas por JavaScript, lo que hace más seguro su uso para almacenar.

// * Autenticación basada en sesión
// * Tokens de sesión (Mejor que Localstorage)
// * Preferencias minimas del usuario.

console.log(document.cookie);

document.cookie = 'usuario=Maxi; path=/; max-age=3600';
console.log(document.cookie);

function getCookie(nombre) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(nombre + '='))
    ?.split('=')[1];
}

console.log(getCookie('theme'));

// ! JS Cookies
// Librería que nos facilita el manejo de cookies en el navegador.
// npm i js-cookie

// * Obteniendo las cookies
console.log(Cookies.get('usuario'));
console.log(Cookies.get());

// * Creando una cookie
Cookies.set('theme', 'dark', { expires: 7 });

// * Borrando cookie
Cookies.remove('numero');

// * Seteando httpOnly
Cookies.set('foo', 'bar', { HttpOnly: true }); // Solo puede ser accedidas por el servidor, no por JavaScript.

// ! LocanStorage
// Almacenamiento local persistente del lado del navegador. Dentro del navegador.

// Ocupan 5 y 10 MB. Se almacena y persiste incluso cerrando la pestaña o el navegador. No se envía al servidor. La info almacenada queda localmente en el cliente (navegador)
// También es vulnerable a los ataques XSS.

window.localStorage.setItem('theme', 'light');
window.localStorage.setItem('object', JSON.stringify({ x: 1, y: 2 })); //convierto a cadena y luego hago el set
console.log(window.localStorage);

window.localStorage.removeItem('theme'); // Eliminar por la key el elemento del storage
// window.localStorage.clear(); // Elimina todo el localStorage

console.log(JSON.parse(window.localStorage.getItem('object'))); // cadena
console.log(window.localStorage.getItem('lista')); // null

// * Preferencias de UI (tema, idioma)
// * Estado de la app que no es sensible.
// * Cache simple de datos públicos.

// ! sessionStorage.
// Almacenamiento Local del lado del navegador pero solo durante la sesión actual de navegador. Que si cierro la pestaña o el navegador se borra la información. No se envía al servidor

// * Estados temporales
// * Formularios parcialmente completados
// * Flujo de varios pasos.

// ! LO MISMO QUE EL LocalStorage PERO SOLO DURANTE LA SESIÓN ACTUAL DEL NAVEGADOR

// ! API para trabajar con el LocalStorage

class LocalStorageApi {
  constructor(storageKey) {
    this.storageKey = storageKey;
    this.data = this.LoadData() || {};
  }
  // Precarga de los elementos que están en el LS
  LoadData() {
    const crudoData = localStorage.getItem(this.storageKey);
    return crudoData ? JSON.parse(crudoData) : [];
  }
  // Guardar (Guardar el elemento dentro del LS)
  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }
  // Obtener todos los elementos
  getALL() {
    return [...this.data];
  }
  // Generar ID único para cada elemento creado
  generateId() {
    return crypto.randomUUID();
  }
  // Crear el elemento (Crear un elemento y guardarlo en el LS)
  create(entity) {
    const nuevaEntity = { id: this.generateId(), ...entity };

    this.data.push(nuevaEntity);
    this.save();
    return nuevaEntity;
  }
  // Obtener por ID específico.
  getById(id) {
    return this.data.find((item) => item.id === id) || null;
  }

  findById(id) {
    const index = this.data.findIndex((item) => item.id === id);
    return index;
  }

  edit(id, updatedEntity) {
    const index = this.findById(id);
    if (index === -1) {
      throw new Error('Elemento no encontrado');
    }

    this.data[index] = {
      ...this.data[index],
      ...updatedEntity,
    };

    this.save();
    return this.data[index];
  }

  delete(id) {
    const index = this.data.findIndex((item) => item.id === id);
    // findIndex -> devuelve la posición del elemento dentro del array buscando por id.
    // Si lo encuentra devuelve la posición donde se encuentra el elemento, sino lo encuentra devuelve -1
    if (index === -1) {
      throw new Error('Elemento no encontrado');
    }

    const removed = this.data.splice(index, 1);
    this.save();
    return removed[0];
  }
}

const apiLS = new LocalStorageApi('carrito');
console.log(apiLS.getALL());
console.log(apiLS);

//apiLS.create({ producto: 'camisa}, precio: 1000);
//apiLS.create({ producto: 'pantalon', precio: 1500 });
//console.log(apiLS.getALL());

const found = apiLS.getById('5ea17f4c-16a6-44c4-ad9e-04d826ef0d9a');
console.log(found);

// https://www.npmjs.com/package/sharp
