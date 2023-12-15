import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const secret = process.env.JWT_SECRET

export function generateToken (user) {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' })
}

export function verifyToken (token) {
  try {
    return jwt.verify(token, secret)
  } catch (err) {
    throw new Error('Token inválido')
  }
}
