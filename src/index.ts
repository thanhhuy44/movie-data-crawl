import express, { Application } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import AppRoutes from "./routes";

const app: Application = express();
dotenv.config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.raw());

AppRoutes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log("App kickstart!");
  console.log("=======🌹🌹🌹=======");
  console.log(`Server run at: http://localhost:${process.env.PORT || 3000}`);
});
