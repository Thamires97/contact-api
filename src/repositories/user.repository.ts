import {
  IUser,
  IUserCreate,
  IUserRepository,
} from "../interfaces/user.interface";
import { prisma } from "../database/prisma-client";

export class UserRepositoryPrisma implements IUserRepository {
  async create(data: IUserCreate): Promise<IUser> {
    const result = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
    return result;
  }
  async findByEmail(email: string): Promise<IUser | null> {
    const result = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return result || null;
  }
}

export { UserRepositoryPrisma as IUserRepository };
