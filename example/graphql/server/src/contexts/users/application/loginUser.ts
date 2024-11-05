import { ApplicationError } from '../../../shared/errors/ApplicationError';
import { errorStatus, errorType } from '../../../utils/constants';
import { UserInput } from '../entity/user';
import { UserRepository } from '../entity/user.repository';
import { getUserByEmail } from './getUserByEmail';

import type { EncryptAdapter, JWTAdapter } from './adapters';

export const loginUser = async (
  user: UserInput,
  repository: UserRepository,
  encrypt: EncryptAdapter,
  jwt: JWTAdapter,
) => {
  const { email, password } = user;

  const userExists = await getUserByEmail(email, repository);

  if (!userExists) {
    throw new ApplicationError(
      'User or password incorrect',
      errorType.UNAUTHORIZED,
      errorStatus.UNAUTHORIZED,
    );
  }

  const validatePassword = await encrypt.compare(password, userExists.password);

  if (!validatePassword) {
    throw new ApplicationError(
      'User or password incorrect',
      errorType.UNAUTHORIZED,
      errorStatus.UNAUTHORIZED,
    );
  }
  const token = jwt.generateToken({
    id: userExists.id,
    email: userExists.email,
    roles: ['user', 'editor'],
  });

  return { token, user: { id: userExists.id, email: userExists.email } };
};
