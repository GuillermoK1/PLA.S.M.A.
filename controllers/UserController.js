import { connectDB } from './db.js'
import bcrypt from 'bcrypt'
import { validateEmail, validatePassword } from './ValidationService.js'

export async function registerUser (email, password) {
  if (!validateEmail(email) || !validatePassword(password)) {
    throw new Error('Validación fallida: Correo electrónico o contraseña inválidos')
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const db = await connectDB()
  await db.collection('users').insertOne({ email, password: hashedPassword })
}

export async function updateUser (req, res) {
  const userId = req.params.userId // Asume que el ID del usuario se pasa como parámetro
  const { email, password } = req.body

  try {
    if (email && !validateEmail(email)) {
      throw new Error('Correo electrónico inválido')
    }

    if (password && !validatePassword(password)) {
      throw new Error('Contraseña inválida')
    }

    const db = await connectDB()
    const updateData = {}

    if (email) updateData.email = email
    if (password) updateData.password = await bcrypt.hash(password, 10)

    await db.collection('users').updateOne({ _id: userId }, { $set: updateData })
    res.status(200).json({ message: 'Usuario actualizado con éxito.' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export async function deleteUser (req, res) {
  const userId = req.params.userId // Asume que el ID del usuario se pasa como parámetro

  try {
    const db = await connectDB()
    await db.collection('users').deleteOne({ _id: userId })
    res.status(200).json({ message: 'Usuario eliminado con éxito.' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
