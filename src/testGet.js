import express from 'express'

const app = express()
const port = 5500

app.get('/api/test', (_req, res) => {
  res.send('Test route works')
})

app.listen(port, () => {
  console.log(`Servidor de prueba corriendo en el puerto ${port}`)
})
