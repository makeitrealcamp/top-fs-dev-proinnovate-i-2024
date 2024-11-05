import jwt from 'jsonwebtoken';
import { JWTAdapter } from '../../application/adapters';


export const createJWTAdapter = (
  secret: string,
  expiresIn: string = '1h',
): JWTAdapter => ({
  generateToken: (payload: object): string => {
    return jwt.sign(payload, secret, { expiresIn });
  },
  verifyToken: (token: string): object | string => {
    return jwt.verify(token, secret);
  },
});
