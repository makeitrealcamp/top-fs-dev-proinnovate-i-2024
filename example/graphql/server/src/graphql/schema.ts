import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

// export const schema = makeExecutableSchema({
//   resolvers,
//   typeDefs,
// });

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
// };

// const users: User[] = [];

// const typeDefs = `

// type Role {
// id: ID,
// description: String,
// }

// type User {
//   id: ID,
//   name: String,
//   email: String,
//   role: Role,
// }

// type Query {
//   hello: String,
//   user: User!,
//   users: [User]!,
// }

// input MessageInput {
//   content: String
//   author: String
// }

//   type Message {
//     id: ID!
//     content: String
//     author: String
//   }
// type Mutation {
// createUser(name: String!, email: String!, password: String!): User!,
//   setMessage(message: String): String
//    createMessage(input: MessageInput): Message

// }

// `;

// const resolvers = {
//   Query: {
//     hello: () => null,
//     user: () => ({ id: '1', name: 'John Doe', email: 'user@email.com' }),
//     users: () => users,
//   },
  
//   Mutation: {
//     setMessage: (input: string) => `My message is: ${input}`,
//     createMessage(_,input: any) {
//       console.log(input);
//       return input;
//     },
//     createUser: (
//       _,
//       {
//         name,
//         email,
//         password,
//       }: { name: string; email: string; password: string },
//     ) => {
//       const user = { id: users.length + 1, name, email, password };
//       users.push(user);
//       return user;
//     },
//   },
// };

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});


// parent: any, args: any, context: any, info: any