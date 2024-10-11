import Cursos from "../models/Cursos";
import upload from '../middleware/upload';



export const renderCursos = async (req, res) => {
  try {
    const cursos = await Cursos.find().lean();
    res.render("index2", { cursos });
  } catch (error) {
    console.log(error.message);
    res.redirect("/cursos");
  }
};

export const renderAgregarCurso = async (req, res) => {
  try {
    const cursos = await Cursos.find().lean();
    res.render("Agregar_curso", { cursos });
  } catch (error) {
    console.log(error.message);
    res.redirect("/cursos");
  }
};



export const createCursos = [upload.single('imagen'), async (req, res) => {
  try {
    const cursos= new Cursos(req.body);

    if (req.file) {
     
      cursos.imagen = req.file.filename;
    }

    await cursos.save();
    res.redirect("/cursos");
  } catch (error) {
    console.log(error);
    res.redirect("/cursos");
  }
}];

export const renderEditCurso = async (req, res) => {
  try {
    const cursos = await Cursos.findById(req.params.id).lean();
    res.render("editar2", { cursos});
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCursos = async (req, res) => {
  const { id } = req.params;
  await Cursos.findByIdAndUpdate(id, req.body);

  res.redirect("/cursos");
};

export const deleteCursos = async (req, res) => {
  const { id } = req.params;
  await Cursos.findByIdAndDelete(id);
  res.redirect("/cursos");
};

export const statusCursos = async (req, res) => {
  const { id } = req.params;
  const cursos= await Cursos.findById(id);
  cursos.opcion = !cursos.opcion;
  await cursos.save();
  res.redirect("/cursos");
};

export const buscarCursosPorNombre = async (req, res) => {
  try {
    const { palabraClave2, tipoBusqueda } = req.query;

    const filtro = {};

    if (tipoBusqueda === "id") {
      filtro.id = { $regex: palabraClave2, $options: "i" };
    }  else if (tipoBusqueda === "materia") {
      filtro.materia = { $regex: palabraClave2, $options: "i" };
    }
    else if (tipoBusqueda === "dia") {
      filtro.dia = { $regex: palabraClave2, $options: "i" };
    } else if (tipoBusqueda === "horario") {
      filtro.horario = palabraClave2;  
    } else if (tipoBusqueda === "credito") {
      filtro.credito = palabraClave2;  
    } 

    const cursos = await Cursos.find(filtro).lean();

    res.render("index2", { cursos });
  } catch (error) {
    console.log(error.message);
    res.redirect("/cursos");
  }
};