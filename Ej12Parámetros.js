const express = require('express');
const app = express();
let mascotas = [
  { id: 1, nombre: "Jack", tipo: "Perro" },
  { id: 2, nombre: "Pumpkin", tipo: "Gato" },
  { id: 3, nombre: "Panpino", tipo: "Cuyo" }
];
app.get('/mascotas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const mascota = mascotas.find(m => m.id === id);
  if (!mascota) {
    return res.status(404).json({ error: "Mascota no encontrada" });
  }
  res.status(200).json(mascota);
});
app.listen(1984, () => {
  console.log('Servidor corriendo en http://localhost:1984');
});
