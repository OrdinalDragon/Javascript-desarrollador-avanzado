// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'; // Agrego los scripts de bootstrap
import './style.css';
import ajax from './utils/ajax';

// ! --------------------------
// ! Cargar barra de navegación
// ! --------------------------

async function cargarNav() {
  console.log('Carga Navbar');

  try {
    // ! 1. Selecionar la etiqueta header
    const header = document.querySelector('header');
    console.log(header);
    // ! 2. Hacer petición para obtener el navbar.html
    const template = await ajax('navbar.html');
    //console.log(template);
    // ! 3. Inyectar dentro del header el template
    header.innerHTML = template;
    // ! 4. Una vez cargado el navbar voy a cargar el resto d elas páginas
    // await getPlantillaSinHistory();
    await getPlantillaConHistory();
  } catch (error) {
    console.error('No se pudo cargar el navbar', error);
  }
}

async function getPlantillaConHistory() {
  console.log('GET Plantillas Con History');

  try {
    const main = document.querySelector('.container');
    console.log(main);

    // ! ------------------------
    // ! Cargamos el HOME -------
    // ! ------------------------
    const hash = window.location.hash; // ''
    console.log(hash); // '#perfil' -> perfil + '.html' -> perfil.html
    // '' -> home.html
    const archivo = hash ? hash.slice(1) + '.html' : 'home.html';
    console.log(archivo);

    const template = await ajax(archivo);

    main.innerHTML = template;

    // ! ------------------------------------------------------------
    // ! Cargamos el resto de las páginas (según corresponda) -------
    // ! ------------------------------------------------------------
    const links = document.querySelectorAll('a');
    console.log(links); // Lista de nodos de tipo a

    links.forEach((link) => {
      link.addEventListener('click', (evento) => {
        evento.preventDefault();
        if (link.id) {
          window.location.hash = link.id;
        }
      });
    });
    window.addEventListener('hashchange', async () => {
      const hash = window.location.hash;
      console.log(hash);

      const archivo = hash ? hash.slice(1) + '.html' : 'home.html';
      console.log(archivo);

      const template = await ajax(archivo);
      console.log(template);

      main.innerHTML = template;
    });
  } catch (error) {
    console.error(error);
  }
}

// eslint-disable-next-line no-unused-vars
async function getPlantillaSinHistory() {
  console.log('GET Plantillas Sin History');

  try {
    const main = document.querySelector('.container');
    console.log(main);

    // ! ------------------------
    // ! Cargamos el HOME -------
    // ! ------------------------
    const archivo = 'home.html';

    const template = await ajax(archivo);

    main.innerHTML = template;

    // ! ------------------------------------------------------------
    // ! Cargamos el resto de las páginas (según corresponda) -------
    // ! ------------------------------------------------------------
    const links = document.querySelectorAll('a');
    console.log(links); // Lista de nodos de tipo a

    links.forEach((link) => {
      //console.log(link);

      link.addEventListener('click', async () => {
        try {
          console.log(link.id);

          const archivo = link.id + '.html';
          console.log(archivo);

          const template = await ajax(archivo);
          main.innerHTML = template;
        } catch (error) {
          console.error(error);
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
}

// https://developer.mozilla.org/es/docs/Web/API/History
// https://developer.mozilla.org/es/docs/Web/API/Location
// https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API

// Api Web (History, Location) <- react-router (hook, componentes) <- Aplicación
function start() {
  cargarNav();
}

/* Todos los nodos html estén disponibles */
document.addEventListener('DOMContentLoaded', start);
