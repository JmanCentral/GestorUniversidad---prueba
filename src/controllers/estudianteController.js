import Estudiantes from "../models/Estudiantes";
import upload from '../middleware/upload';



export const createEstudiantes = [upload.single('imagen'), async (req, res) => {
  try {
    const estudiantes = new Estudiantes(req.body);

    if (req.file) {
      // Guardar el nombre del archivo en la base de datos
      estudiantes.imagen = req.file.filename;
    }

    await estudiantes.save();
    res.redirect("/estudiantes");
  } catch (error) {
    console.log(error);
    res.redirect("/estudiantes");
  }
}];


export const renderEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiantes.find().lean();
    res.render("index", { estudiantes });
  } catch (error) {
    console.log(error.message);
    res.redirect("/estudiantes");
  }
};

export const renderAgregarEstudiante = async (req, res) => {
  try {
    const estudiantes = await Estudiantes.find().lean();
    res.render("Agregar_estudiante", { estudiantes });
  } catch (error) {
    console.log(error.message);
    res.redirect("/estudiantes");
  }
};

export const renderEditEstudiante = async (req, res) => {
  try {
    const estudiantes = await Estudiantes.findById(req.params.id).lean();
    res.render("editar", { estudiantes });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateEstudiantes = async (req, res) => {
  const { id } = req.params;
  await Estudiantes.findByIdAndUpdate(id, req.body);

  res.redirect("/estudiantes");
};

export const deleteEstudiantes = async (req, res) => {
  const { id } = req.params;
  await Estudiantes.findByIdAndDelete(id);
  res.redirect("/estudiantes");
};

export const statusEstudiantes= async (req, res) => {
  const { id } = req.params;
  const estudiantes= await Estudiantes.findById(id);
  estudiantes.opcion = !estudiantes.opcion;
  await estudiantes.save();
  res.redirect("/estudiantes");
};

export const buscarEstudiantesPorNombre = async (req, res) => {
  try {
    const { palabraClave, tipoBusqueda } = req.query;


    const filtro = {};

    if (tipoBusqueda === "id") {
      filtro.id = { $regex: palabraClave, $options: "i" };
    }  else if (tipoBusqueda === "nombre") {
      filtro.nombre = { $regex: palabraClave, $options: "i" };
    }
    else if (tipoBusqueda === "apellido") {
      filtro.apellido = { $regex: palabraClave, $options: "i" };
    } else if (tipoBusqueda === "edad") {
      filtro.edad = palabraClave;  
    }


    const estudiantes = await Estudiantes.find(filtro).lean();

    res.render("index", { estudiantes });
  } catch (error) {
    console.log(error.message);
    res.redirect("/estudiantes");
  }
};