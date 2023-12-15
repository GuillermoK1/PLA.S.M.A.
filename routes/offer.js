/* eslint-disable spaced-comment */
import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { connectDB } from '../src/db.js'

const router = Router()
// Validaciones
router.post('/addService',
  [
    body('service').not().isEmpty().withMessage('El servicio es requerido.'),
    body('email').isEmail().withMessage('Correo electrónico inválido'),
    body('name').not().isEmpty().trim().escape().withMessage('El nombre es requerido'),
    body('name').matches(/^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/).withMessage('El nombre solo puede contener letras.'),
    body('surname').matches(/^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/).withMessage('Los apellidos solo pueden contener letras.'),
    body('nif').matches(/^[0-9X-Z]{8}[A-Z]$/).withMessage('NIF/NIE inválido.'),
    body('zip_code').matches(/^[0-9]{5}$/).withMessage('Código postal inválido.'),
    /*body('birthdate').isDate({ format: 'DD/MM/YYYY' }).custom((value) => {
      const birthDate = new Date(value)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      };
      console.log(age)
      if (age < 18) {
        throw new Error('Debes ser mayor de 18 años.')
      }
      return true
    }),*/
    body('username').isLength({ max: 10 }).matches(/^[A-Za-z0-9]+$/).withMessage('Nombre de usuario inválido.'),
    body('iban').matches(/^ES[0-9]{22}$/).withMessage('IBAN inválido.')
    // Más validaciones según lo necesites...
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array())
      return res.status(400).json({ errors: errors.array() })
    }

    const db = await connectDB()
    try {
      console.log('trying to connect to DB.')
      const collectionName = req.body.service.replace(/\s+/g, '_')
      const collection = db.collection(collectionName)
      const result = await collection.insertOne(req.body)
      res.status(200).json({ message: 'Servicio ofrecido con éxito', id: result.insertedId })
    } catch (error) {
      console.error('Error al insertar documento:', error)
      res.status(500).json({ message: 'Error al insertar documento' })
    }
  }
)
console.log(router)
export default router
