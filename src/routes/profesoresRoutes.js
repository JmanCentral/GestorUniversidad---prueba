import Profesores from "../models/Profesores";
import { Router } from "express";
import { 
  createProfesores, deleteProfesores, renderProfesores, 
  renderEditProfesor, statusProfesores, updateProfesores,buscarProfesoresPorNombre , renderAgregarProfesor
} from "../controllers/profesorController";

const router = Router();

router.get("/", renderProfesores);  

router.get("/agregar", renderAgregarProfesor);  

router.post("/agregar", createProfesores);

router.get("/:id/update", renderEditProfesor);

router.post("/:id/update", updateProfesores);

router.get("/:id/delete", deleteProfesores);

router.get("/:id/status", statusProfesores);

router.get("/buscar", buscarProfesoresPorNombre);

export default router;