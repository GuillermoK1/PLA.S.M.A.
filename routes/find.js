import { Router } from 'express'
import { connectDB } from '../src/db.js'

const router = Router()
router.get('/results', async (req, res) => {
  try {
    const { service, page = 1 } = req.query
    const resultsPerPage = 3
    const db = await connectDB()
    const collection = db.collection(service)
    const offset = (page - 1) * resultsPerPage
    const results = await collection.find({}).skip(offset).limit(resultsPerPage).toArray()
    const totalResults = await collection.countDocuments({})

    res.json({ results, totalResults })
  } catch (error) {
    console.error('Error en el manejo de la ruta:', error)
    res.status(500).json({ error: 'Error en el manejo de la ruta:' })
  }
})

export default router
