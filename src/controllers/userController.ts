import { Container, Inject, Service } from "typedi";
import { UserService } from "../services/userService";
import { NextFunction, Request, Response } from "express";
import { IUserService } from "../services/interfaces/IUserService";

@Service()
export class UserController {
  private userService: IUserService;

  constructor(@Inject() userService: UserService) {
    this.userService = userService;
  }

  getAllUsers(req: Request, res: Response, next: NextFunction) {
    const response = this.userService.getAllUsers();
    res.send(response);
  }
}
