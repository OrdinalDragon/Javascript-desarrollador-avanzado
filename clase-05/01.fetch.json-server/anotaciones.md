# Trabajando con JSON-SERVER

<https://github.com/typicode/json-server>

1. Instalamos el json-server
```sh
npm install json-server -D
```

2. Creamos archivo db.json

```sh
mkdir data
touch data/db.json
```

3. Creamos la estructura, endpoints de nuestro backend

```json
{
    "productos": [
        { "id": 1, "nombre": "PC", "precio": 222.2 },
        { "id": 2, "nombre": "PC Gamer", "precio": 333.3 },
        { "id": 3, "nombre": "Notebook", "precio": 533.3 },
        { "id": 4, "nombre": "Notebook Gamer", "precio": 733.3 },
        { "id": 5, "nombre": "Mouse gamer", "precio": 73.3 }
    ]
}
```

4. Ir al package.json

```json
"scripts": {
    "server": "json-server --path data/db.json --port 8080"
}.
```