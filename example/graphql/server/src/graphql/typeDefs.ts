import { gql } from 'graphql-tag';

export const typeDefs = gql`
  # Entities
  type User {
    id: ID!
    email: String!
    name: String
    posts: [Post]
    comments: [Comment]
    createdAt: String
    updatedAt: String
  }

  type Post {
    id: ID!
    title: String
    content: String
    published: Boolean
    author: User!
    comments: [Comment]
    createdAt: String
    updatedAt: String
  }

  type Comment {
    id: ID!
    content: String!
    post: Post!
    author: User!
    createdAt: String
    updatedAt: String
  }
  # root queries
  type Query {
    users: [User]
    user(id: ID!): User
    posts: [Post]
    post(id: ID!): Post
    comments: [Comment]
    comment(id: ID!): Comment
  }
  # root mutations
  type Mutation {
    register(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    createPost(title: String!, content: String): Post
    createComment(postId: ID!, content: String!): Comment
    deletePost(id: ID!): Boolean
  }

  type AuthPayload {
    token: String
    user: User
  }
`;
