export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  age?: number | null;
  bio?: string | null;
};

/*

id             Int              @id @default(autoincrement())
  email          String           @unique
  password       String
  isVerified     Boolean          @default(false)
  oauthProvider  String?
  oauthId        String?
  refreshTokens  RefreshToken[]
  posts          Post[]
  comments       Comment[]
  likes          Like[]
  subscription   Subscription?
  avatarUrl      String?
  createdAt      DateTime         @default(now())
  updatedAt      DateTime         @updatedAt
*/
export type UserInput = Pick<User, 'email' | 'password'>;

// Partial is a utility type that makes all properties of the object optional.
// Omit is a utility type that makes it possible to create a new type by omitting properties from another type.
// Pick is a utility type that makes it possible to create a new type by picking properties from another type.
