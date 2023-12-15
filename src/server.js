import express from 'express'
import session from 'express-session'
import fs from 'fs'
import http from 'http'
import https from 'https'
import { connectDB } from '../src/db.js'
import findRouter from '../routes/find.js'
import offerRouter from '../routes/offer.js'
import cors from 'cors'
import cron from 'node-cron'
import passport from 'passport'
import helmet from 'helmet'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))

app.use(helmet())
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
  origin: ['http://127.0.0.1:3000', 'http://127.0.0.1:5500']
}))

app.get('/api/test', (_req, res) => {
  res.send('Test route works')
})

app.use('/api', findRouter)
app.use('/api', offerRouter)

app.listen(port, () => {
  console.log(`Servidor de desarrollo corriendo en el puerto ${port}`)
})
if (process.env.NODE_ENV === 'development') {
  const key = fs.readFileSync('C:\\Users\\jwkab\\.vscode\\Guillermo\\PLA.S.M.A\\localhost+2-key.pem')
  const cert = fs.readFileSync('C:\\Users\\jwkab\\.vscode\\Guillermo\\PLA.S.M.A\\localhost+2.pem')
  const options = { key, cert }

  // Crear servidor HTTPS para ambos, desarrollo y producción
  const httpsServer = https.createServer(options, app)
  httpsServer.listen(port, () => {
    console.log(`Servidor HTTPS corriendo en el puerto ${port}`)
  })

  // Manejo de errores para el servidor HTTPS
  httpsServer.on('error', (error) => {
    console.error('Error en el servidor HTTPS:', error)
  })

  // Opcional: Crear un servidor HTTP que redirija a HTTPS
  const httpServer = http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` })
    res.end()
  })
  httpServer.listen(80, () => {
    console.log('Redireccionamiento HTTP corriendo en el puerto 80')
  })
  // Configuración común de middleware

  cron.schedule('* * * * *', async () => {
    const db = await connectDB()
    await db.collection('passwordResetTokens').deleteMany({ expiresAt: { $lt: new Date() } }); console.log('eliminando tokens caducados.')
  })
}
