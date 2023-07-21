// require("dotenv").config();
const PORT = 3000;
const morgan = require("morgan");
const cors = require("cors");
// Routers
const characterRouter = require("./routes/character");
const userRouter = require("./routes/user.js");
const favoriteRouter = require("./routes/favorites");

// Express
const express = require("express");
const app = express();

// Middlewars
app.use(express.json()); // para poder recibir JSON por req.body
app.use(morgan("dev")); // Me muestra en consola como sale la REQ y la RES
// Permisos -> Cors
app.use(cors()); // Habilito las CORS para que cualquier origen pueda enviar solicitud a mi servidor

// Routers --> Que rutas voy a usar
app.use("/character", characterRouter);
app.use("/user", userRouter);
app.use("/favorites", favoriteRouter);

app.get("/health-check", (req, res) => {
  res.send("Working");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server raised in port: ${PORT}`);
});
