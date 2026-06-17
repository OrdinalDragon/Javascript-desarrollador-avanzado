const ajax = async (url, metodo = 'GET') => {
  try {
    const rutaCompleta = url;
    const res = await fetch(rutaCompleta, { method: metodo });
    if (!res.ok) throw new Error('No se pudo obtener el template', res.status);

    const template = await res.text();
    return template;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default ajax;
