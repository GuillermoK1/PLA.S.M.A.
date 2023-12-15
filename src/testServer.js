import express from 'express'
import fs from 'fs'
import https from 'https'
import findRouter from '../routes/find.js'
import cors from 'cors'

const app = express()
const port = 3000 // Puedes mantener el mismo puerto o cambiarlo si es necesario

// Configuración para HTTPS
const key = fs.readFileSync('C:\\Users\\jwkab\\.vscode\\Guillermo\\PLA.S.M.A\\localhost+2-key.pem')
const cert = fs.readFileSync('C:\\Users\\jwkab\\.vscode\\Guillermo\\PLA.S.M.A\\localhost+2.pem')
const options = { key, cert }

app.use(express.json())
app.use(cors())

// Ruta de prueba para HTTP
app.get('/test', (_req, res) => {
  res.send('Test route works')
})

// Ruta para findRouter
app.use('/api', findRouter)

// Crear servidor HTTPS
https.createServer(options, app).listen(port, () => {
  console.log(`Test HTTPS server running on port ${port}`)
})
