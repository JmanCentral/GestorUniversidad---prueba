import { Schema, model } from "mongoose";

const profesorEsquema = new Schema(
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
    },
    email: {
      type: String,
      required: true,
    },
    especializacion: {
      type: String,
      required: true,
    },
    salario: {
      type: Number,
      required: true,
    },
    departamento: {
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

export default model("Profesores", profesorEsquema);
