import { User, UserInput } from './user';

export interface UserRepository {
  createUser(user: UserInput): Promise<User>;
  loginUser(user: UserInput): Promise<string>;
  getUserByEmail(email: string): Promise<User | null>;
  getAllUsers(): Promise<User[]> | null;
}
