formu.addEventListener('submit', (e) => {
e.preventDefault()
    const data = JSON.stringify(Object.fromEntries(new FormData(e.target)))
    if(data.nombre && data.email && data.edad){
        alert(data)
    }
    formu.reset()
})

<form id="formu" class="mt-4 w-100 h-80 mx-auto ">
    <div>
      <input placeholder="Nombre" type="text" id="lbl-nombre" name="nombre">
    </div>
    <div>
      <input placeholder="Email" type="email" id="lbl-email" name="email">
    </div>
    <div>
      <input placeholder="Edad" type="number" min="18" max="100" id="lbl-edad" name="edad">
    </div>
    <button
      class="rounded-2xl bg-green-500 hover:bg-green-700 px-3 py-2 border cursor-pointer text-white">Enviar</button>