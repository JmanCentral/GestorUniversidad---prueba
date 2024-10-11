import { Schema, model } from "mongoose";

const cursoEsquema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    
    materia: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
    },

    dia: {
      type: String,
      required: true,
    },

    horario: {
      type: String,
      required: true,
    },

    credito: {
    type: Number,
    required: true,
  },
    opcion: {
      type: Boolean,
      default: false,
    },
    imagen: {
      type: String,
    },


  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Cursos", cursoEsquema);
