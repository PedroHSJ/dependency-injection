import { Inject, Service } from "typedi";
import { IUserService } from "./interfaces/IUserService";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { UserRepository } from "../repositories/userRepository";
import { User } from "../entities/User";

@Service()
export class UserService implements IUserService {
  public userRepository: IUserRepository;

  constructor(@Inject() userService: UserRepository) {
    this.userRepository = userService;
  }
  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.getAllUsers();
    return users;
  }
}
