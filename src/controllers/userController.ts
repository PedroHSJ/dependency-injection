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

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try{

      const response = await this.userService.getAllUsers();
      console.log(response)
      res.status(200).send(response);
    }catch(e){
      next(e);
    }
  }
}
