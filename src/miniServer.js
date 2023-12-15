import express from 'express'
import findRouter from '../routes/find.js'
import offerRouter from '../routes/offer.js'
import cors from 'cors'

const app = express()
const port = 3000

// Primero, configura los middlewares generales
app.use(express.json())
app.use(cors({
  origin: ['http://127.0.0.1:3000', 'http://127.0.0.1:5500']
}))

// Luego, define tus rutas específicas
app.get('/api/test', (_req, res) => {
  res.send('Test route works')
})

// Finalmente, usa el router
app.use('/api', findRouter)
app.use('/api', offerRouter)

app.listen(port, () => {
  console.log(`Servidor de desarrollo 'miniServer.js' corriendo en el puerto ${port}`)
})
