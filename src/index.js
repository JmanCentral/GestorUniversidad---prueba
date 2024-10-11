import app from "./app"; // Equivale al codigo que esta en app.js
import './database';
import { PORT } from "./config";

const multer = require('multer');

app.listen(PORT);
console.log("Servidor en puerto", PORT);
