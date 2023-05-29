const express = require('express');
const app = express();
const port = 3000;

// Endpoint para recibir el webhook de HubSpot
app.post('/hubspot-webhook', (req, res) => {
  // Verificar que la solicitud contiene datos del webhook
  if (req.body) {
    // Procesar los datos recibidos del webhook
    const webhookData = req.body;
    console.log('Datos del webhook de HubSpot:', webhookData);

    // Realizar acciones adicionales según tus necesidades
    // ...

    // Responder al webhook de HubSpot con un código de estado exitoso (200)
    res.sendStatus(200);
  } else {
    // Si no hay datos en la solicitud, responder con un código de estado de error (400)
    res.sendStatus(400);
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
