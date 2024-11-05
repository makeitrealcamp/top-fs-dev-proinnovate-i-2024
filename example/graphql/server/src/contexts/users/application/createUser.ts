import { FRONTEND_URL } from '../../../config/config';
import { User, UserInput } from '../entity/user';
import { UserRepository } from '../entity/user.repository';
import { EncryptAdapter, JWTAdapter, MailerAdapter } from './adapters';

export const createUser = async (
  user: UserInput,
  userRepository: UserRepository,
  encrypt: EncryptAdapter,
  jwt: JWTAdapter,
  mailer?: MailerAdapter,
): Promise<User> => {
  // 1. verify if name and email are provided
  // 2. create a new user (object) with the provided name and email
  // 3. save the new user in the database

  const { password } = user;
  const hashedPassword = await encrypt.hash(password);

  const newUser = await userRepository.createUser({
    ...user,
    password: hashedPassword,
  });

  const token = jwt.generateToken({ email: newUser.email });

  if (mailer) {
    await mailer?.sendMail(
      newUser.email,
      'Welcome to our platform',
      `<h1>Welcome ${newUser.email}</h1>
    <p>Thanks for joining our platform your token ${token}</p> 
    Link: <a href="${FRONTEND_URL}/verify/${token}">Verify your account</a>
    `,
    );
  }
  console.log('created user application');
  console.log({ newUser });
  return newUser;
};
