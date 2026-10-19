# Evaluación 1 · API de la Copa Libertadores

API REST hecha con Node.js y Express que responde consultas sobre clubes de la Copa Libertadores, organizados por país y con los años de los títulos que ganaron.

## Cómo levantarlo

Requisitos: Node 20 o superior y yarn.

```bash
yarn
yarn dev
```

- `yarn` instala las dependencias (express y cors).
- `yarn dev` levanta el servidor con `node --watch`, que se reinicia solo al guardar cambios.

El servidor queda en **http://localhost:3000**

## Rutas

| Ruta | Descripción |
|------|-------------|
| `GET /api/clubes` | Todos los clubes (16) |
| `GET /api/clubes/:id` | Un club por su id. 404 si no existe |
| `GET /api/clubes?pais=Chile` | Clubes de un país (sin importar mayúsculas). 404 si el país no existe |
| `GET /api/titulos/:club` | Años de títulos de un club por su nombre (sin importar mayúsculas). 404 si el club no existe |

Un club que existe pero no ha ganado títulos responde `200` con `[]`. Un club o país que no existe responde `404` con un JSON como `{ "error": "No existe el club 99" }`.

## Video

🎥 [Ver video de la evaluación](PEGA-AQUÍ-EL-ENLACE-DE-YOUTUBE)