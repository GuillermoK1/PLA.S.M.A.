import { authenticateUser } from './UserService.js'
import { generateToken } from './TokenService.js'

export async function login (req, res) {
  try {
    const { email, password } = req.body
    const user = await authenticateUser(email, password)
    const token = generateToken(user)
    res.json({ token })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

export function logout (req, res) {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Error al cerrar la sesión.' })
    }
    res.status(200).json({ message: 'Sesión cerrada con éxito.' })
  })
}
