const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;

/* Express Estatic carpeta Public */
app.use(express.static('public'));

/* Colocación de Rutas */
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname,'views','register.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname,'views','login.html')));

/* Levantar el Servidor */
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));
