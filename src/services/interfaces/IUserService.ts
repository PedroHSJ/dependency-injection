import { User } from "../../entities/User";

export interface IUserService {
  getAllUsers(): Promise<User[]>;
}
