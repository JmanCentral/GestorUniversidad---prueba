import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
    try {
      //const db = await connect("Poner la ruta de la base de datos");
      console.log("Database connected to", db.connection.name);
    } catch (error) { 
      console.error(error);
    }
  })();