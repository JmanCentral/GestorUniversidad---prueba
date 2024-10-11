import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
    try {
      const db = await connect("mongodb+srv://jmancipet:CoolDrink@cluster0.i5sdf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log("Database connected to", db.connection.name);
    } catch (error) { 
      console.error(error);
    }
  })();