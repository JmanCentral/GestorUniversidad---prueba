import Profesores from "../models/Profesores";
import upload from '../middleware/upload';


// Modificar el método renderProfesores para pasar la URL de la imagen
export const renderProfesores = async (req, res) => {
  try {
    const profesores =  await Profesores.find().lean();
    res.render("index1", { profesores });
  } catch (error) {
    console.log(error.message);
    res.redirect("/profesores");
  }
};

// Modificar el método renderProfesores para pasar la URL de la imagen
export const renderAgregarProfesor = async (req, res) => {
  try {
    const profesores =  await Profesores.find().lean();
    res.render("Agregar_profesor", { profesores });
  } catch (error) {
    console.log(error.message);
    res.redirect("/profesores");
  }
};


export const createProfesores = [upload.single('imagen'), async (req, res) => {
  try {
    const profesores = new Profesores(req.body);

    if (req.file) {
      // Guardar el nombre del archivo en la base de datos
      profesores.imagen = req.file.filename;
    }

    await profesores.save();
    res.redirect("/profesores");
  } catch (error) {
    console.log(error);
    res.redirect("/profesores");
  }
}];


export const renderEditProfesor= async (req, res) => {
  try {
    const profesores = await Profesores.findById(req.params.id).lean();
    res.render("editar1", { profesores });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProfesores = async (req, res) => {
  const { id } = req.params;
  await Profesores.findByIdAndUpdate(id, req.body);

  res.redirect("/profesores");
};

export const deleteProfesores = async (req, res) => {
  const { id } = req.params;
  await Profesores.findByIdAndDelete(id);
  res.redirect("/profesores");
};

export const statusProfesores = async (req, res) => {
  const { id } = req.params;
  const profesores = await Profesores.findById(id);
  profesores.opcion = !profesores.opcion;
  await profesores.save();
  res.redirect("/profesores");
};

export const buscarProfesoresPorNombre = async (req, res) => {
  try {
    const { palabraClave1, tipoBusqueda } = req.query;

 
    const filtro = {};

    if (tipoBusqueda === "id") {
      filtro.id = { $regex: palabraClave1, $options: "i" };
    }  else if (tipoBusqueda === "nombre") {
      filtro.nombre = { $regex: palabraClave1, $options: "i" };
    }
    else if (tipoBusqueda === "apellido") {
      filtro.apellido = { $regex: palabraClave1, $options: "i" };
    } else if (tipoBusqueda === "email") {
      filtro.email = palabraClave1;  
    } else if (tipoBusqueda === "especializacion") {
      filtro.especializacion = palabraClave1;  
    } else if (tipoBusqueda === "salario") {
      filtro.salario = palabraClave1;  
    } else if (tipoBusqueda === "departamento") {
      filtro.departamento = palabraClave1;  
    }


    const profesores = await Profesores.find(filtro).lean();

    res.render("index1", { profesores });
  } catch (error) {
    console.log(error.message);
    res.redirect("/profesores");
  }
};


