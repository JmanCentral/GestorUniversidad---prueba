import { Router } from "express";
import mongoose from "mongoose";
import { GridFSBucket } from "mongodb";
import { createEstudiantes, deleteEstudiantes, renderEditEstudiante, renderEstudiantes, statusEstudiantes, updateEstudiantes, buscarEstudiantesPorNombre , renderAgregarEstudiante } from "../controllers/estudianteController";

const router = Router();


router.get("/", renderEstudiantes);

router.get("/agregar",  renderAgregarEstudiante);

router.post("/agregar", createEstudiantes);

router.get("/:id/update", renderEditEstudiante);

router.post("/:id/update", updateEstudiantes);

router.get("/:id/delete", deleteEstudiantes);

router.get("/:id/status", statusEstudiantes);

router.get("/buscar", buscarEstudiantesPorNombre);


export default router;

