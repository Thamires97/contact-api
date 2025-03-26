import { UserRepositoryPrisma } from "../repositories/user.repository";
import {
  IUserCreate,
  IUserRepository,
  IUser,
} from "../interfaces/user.interface";

export class UserUseCase {
  private userRepository: IUserRepository;
  constructor() {
    this.userRepository = new UserRepositoryPrisma();
  }

  async create({ name, email }: IUserCreate): Promise<IUser> {
    const verifyEmail = await this.userRepository.findByEmail(email);
    if (verifyEmail) {
      throw new Error("Email already exists");
    }

    const result = await this.userRepository.create({ name, email });
    return result;
  }
}
