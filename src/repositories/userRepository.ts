import { Service } from "typedi";
import { IUserRepository } from "./interfaces/IUserRepository";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Repository } from "typeorm";

@Service()
export class UserRepository implements IUserRepository {
  repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.repo.find();
    return users;
  }
}
