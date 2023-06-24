import "reflect-metadata";
import express from "express";
import { UserController } from "./controllers/userController";
import Container, { Service } from "typedi";
import { userRoutes } from "./routes";
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

//Interceptador de erros
app.use(
  (
    error: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("Erro initialize: " + error);
  });
