export interface IUser {
  id: string;
  name: string;
  email: string;
  // password: string;
  // role: string;
  // createdAt: Date;
  // updatedAt: Date;
}

export interface IUserCreate {
  name: string;
  email: string;
}

export interface UserRepository {
  create(data: IUserCreate): Promise<IUser>;

  //   getAll(): Promise<IUser[]>;
  //   getOne(id: string): Promise<IUser>;
  //   update(id: string, user: IUser): Promise<IUser>;
  //   delete(id: string): Promise<void>;
}
