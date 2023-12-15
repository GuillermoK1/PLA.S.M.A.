/* eslint-disable space-before-function-paren */
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { connectDB } from './db.js'
import dotenv from 'dotenv'
import validator from 'validator'

dotenv.config()

const secret = process.env.JWT_SECRET // Clave secreta para JWT

// Función de ayuda para validar el correo electrónico
function validateEmail(email) {
  return validator.isEmail(email)
}

// Función de ayuda para validar la fortaleza de la contraseña
function validatePassword(password) {
  // Esta es una validación básica. Puedes hacerla más estricta según tus necesidades
  return validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1
  })
}

// Función para registrar un nuevo usuario
export async function registerUser(email, password) {
  if (!validateEmail(email) || !validatePassword(password)) {
    throw new Error('Validación fallida: Correo electrónico o contraseña inválidos')
  }

  const db = await connectDB()

  // Verificar si el usuario ya existe
  const existingUser = await db.collection('users').findOne({ email })
  if (existingUser) {
    throw new Error('El usuario ya existe')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  // Crear un nuevo usuario en la base de datos
  await db.collection('users').insertOne({ email, password: hashedPassword })
}

// Función para autenticar un usuario
export async function authenticateUser(email, password) {
  if (!validateEmail(email)) {
    throw new Error('Correo electrónico inválido')
  }

  const db = await connectDB()
  const user = await db.collection('users').findOne({ email })

  if (!user) {
    throw new Error('Usuario no encontrado')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new Error('Contraseña incorrecta')
  }

  // Generar un token JWT para la sesión
  const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' })
  return token
}

// Función para verificar un token de sesión
export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secret)
    return decoded
  } catch (err) {
    throw new Error('Token inválido')
  }
}

// Función para registrar errores
export async function logError(error, userContext) {
  const db = await connectDB()
  await db.collection('logErrors').insertOne({ error: error.message, userContext, timestamp: new Date() })
}
