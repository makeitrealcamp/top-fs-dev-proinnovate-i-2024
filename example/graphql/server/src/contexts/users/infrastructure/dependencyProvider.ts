import { JWT_SECRET } from '../../../config/config';
import {
  EncryptAdapter,
  JWTAdapter,
  MailerAdapter,
} from '../application/adapters';
import { UserRepository } from '../entity/user.repository';
import { createMailerAdapter } from './adapters';
import { createBcryptAdapter } from './adapters/bcryptAdapter';
import { createJWTAdapter } from './adapters/jwtAdapter';
import { userMongooseRepository } from './repositories/user.mongoose.repository';
import { userPrismaRepository } from './repositories/user.prisma.repository';

interface Dependencies {
  bcryptAdapter: EncryptAdapter;
  jwtAdapter: JWTAdapter;
  userRepository: UserRepository;
  mailerService: MailerAdapter;
}

export const createDependencies = (): Dependencies => {
  const bcryptAdapter = createBcryptAdapter(10);
  const jwtAdapter = createJWTAdapter(`${JWT_SECRET}`, '1h');
  const mailerService = createMailerAdapter();

  return {
    bcryptAdapter,
    jwtAdapter,
    userRepository: userMongooseRepository,
    mailerService,
  };
};
