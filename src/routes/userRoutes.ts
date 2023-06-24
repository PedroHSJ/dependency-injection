import { Router } from "express";
import { UserController } from "../controllers/userController";
import Container from "typedi";
const userRoutes = Router();

const userController = Container.get(UserController);
userRoutes.get("/", userController.getAllUsers.bind(userController));

export { userRoutes };
