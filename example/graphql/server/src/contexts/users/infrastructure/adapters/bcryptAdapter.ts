import bcrypt from 'bcrypt';
import { EncryptAdapter } from '../../application/adapters';


export const createBcryptAdapter = (
  saltRounds: number = 10,
): EncryptAdapter=> ({
  hash: async (password: string): Promise<string> => {
    return bcrypt.hash(password, saltRounds);
  },
  compare: async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
  },
});
