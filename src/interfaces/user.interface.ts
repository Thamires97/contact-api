export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserCreate {
  name: string;
  email: string;
}

export interface IUserRepository {
  create(data: IUserCreate): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | null>;

  //   getAll(): Promise<IUser[]>;
  //   getOne(id: string): Promise<IUser>;
  //   update(id: string, user: IUser): Promise<IUser>;
  //   delete(id: string): Promise<void>;
}
