import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGO_URI
let db = null

// eslint-disable-next-line space-before-function-paren
export async function connectDB() {
  console.log('Solicitud enviada.')
  if (db) return db
  try {
    const client = new MongoClient(uri)
    await client.connect()
    db = client.db(process.env.DB_NAME)
    console.log('Conexión exitosa al clúster de MongoDB')
    return db
  } catch (error) {
    console.error('Error al conectar al clúster de MongoDB:', error)
    throw error
  }
}
