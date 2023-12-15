// Ruta para procesar la solicitud de reembolso
app.post('/solicitar-reembolso', (req, res) => {
  // Verificar que el usuario esté autenticado (depende de tu sistema de autenticación)
  if (!req.user) {
    return res.status(401).json({ mensaje: 'No autorizado' });
  }

  const userId = req.user.id; // Obtener el ID del usuario autenticado
  const motivo = req.body.motivo; // Obtener el motivo desde el cuerpo de la solicitud
  const montoReembolso = req.body.monto; // Obtener el monto desde el cuerpo de la solicitud

  // Lógica para registrar la solicitud de reembolso en la base de datos
  const resultado = database.registrarSolicitudReembolso(userId, motivo, montoReembolso); // Reemplaza con tu función real

  if (resultado) {
    res.json({ mensaje: 'Solicitud de reembolso registrada' });
  } else {
    res.status(500).json({ mensaje: 'Error al registrar la solicitud de reembolso' });
  }
});

// Otras rutas y lógica para obtener el historial de transacciones, recargar saldo, etc.

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
