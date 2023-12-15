import { createTransport } from 'nodemailer'

// Configuración del transportador
const transporter = createTransport({
  service: 'gmail', // Cambia esto según tu proveedor de correo
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

// Función para enviar correo electrónico
const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Correo enviado: ' + info.response)
  } catch (error) {
    console.error('Error al enviar correo: ', error)
  }
}

export default sendEmail
