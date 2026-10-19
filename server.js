import express from 'express'
import cors from 'cors'
import { paises, clubes } from './datos.js'

const app = express()
app.use(cors())

const PORT = 3000

// 👉 aquí van tus rutas
app.get('/api/clubes', (req, res) => {
  const { pais } = req.query

  if (!pais) {
    return res.status(200).json(clubes)
  }

  const paisEncontrado = paises.find(
    p => p.nombre.toLowerCase() === pais.toLowerCase()
  )

  if (!paisEncontrado) {
    return res.status(404).json({ error: `No existe el país ${pais}` })
  }

  const clubesDelPais = clubes.filter(c => c.paisId === paisEncontrado.id)
  res.status(200).json(clubesDelPais)
})

app.get('/api/clubes/:id', (req, res) => {
  const id = Number(req.params.id)

  const club = clubes.find(c => c.id === id)

  if (!club) {
    return res.status(404).json({ error: `No existe el club ${req.params.id}` })
  }

  res.status(200).json(club)
})

app.get('/api/titulos/:club', (req, res) => {
  const nombre = req.params.club

  const club = clubes.find(
    c => c.nombre.toLowerCase() === nombre.toLowerCase()
  )

  if (!club) {
    return res.status(404).json({ error: `No existe el club ${nombre}` })
  }

  res.status(200).json(club.titulos)
})

app.listen(PORT, () => {
  console.log(`🏆 API escuchando en http://localhost:${PORT}`)
})