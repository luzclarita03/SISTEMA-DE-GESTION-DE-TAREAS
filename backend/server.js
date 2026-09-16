const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensaje: "Sistema de Gestión de Tareas - Backend funcionando",
    estado: "OK"
  });
});

app.get("/api/salud", (req, res) => {
  res.json({
    servicio: "backend",
    estado: "saludable"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend ejecutándose en el puerto ${PORT}`);
});
