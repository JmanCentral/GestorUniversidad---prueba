import express from "express";
import indexRoutes from "./routes/indexRoutes";
import profesoresRoutes from "./routes/profesoresRoutes";
import cursosRoutes from "./routes/cursosRoutes"
import exphbs from "express-handlebars";
import path from "path"; // modulo de node
import morgan from "morgan";  


const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ruta para servir la página de login
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.use("/estudiantes", indexRoutes);
app.use("/profesores", profesoresRoutes); 
app.use("/cursos", cursosRoutes); 

//archivos estaticos
app.use(express.static(path.join(__dirname, "frontend")));

export default app; //exporto el objeto app
