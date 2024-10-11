import Cursos from "../models/Cursos";
import { Router } from "express";
import { 
  createCursos, deleteCursos, renderCursos, 
  renderEditCurso, statusCursos, updateCursos,buscarCursosPorNombre ,  renderAgregarCurso
} from "../controllers/cursoControler";

const router = Router();

router.get("/", renderCursos);  

router.get("/agregar",  renderAgregarCurso);  

router.post("/agregar", createCursos);

router.get("/:id/update", renderEditCurso);

router.post("/:id/update", updateCursos);

router.get("/:id/delete", deleteCursos);

router.get("/:id/status", statusCursos);

router.get("/buscar", buscarCursosPorNombre );

export default router;