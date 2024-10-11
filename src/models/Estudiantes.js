import { Schema, model } from "mongoose";

const estudianteEsquema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    edad: {
      type: Number,
      required: true,
    },

    hobbie: {
    type: String,
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

export default model("Estudiantes", estudianteEsquema);
