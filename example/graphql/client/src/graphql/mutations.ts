import { gql } from '@apollo/client';

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String) {
    createPost(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

export const CREATE_NEW_POST = `
  mutation CREATE_NEW_POST($title: String!, $content: String) {
    createPost(title: $title, content: $content) {
      id
      title
      content
      author {
        name
      }
    }
  }
`;

export const DELETE_POST_BY_ID = `
  mutation DELETE_POST_BY_ID($id: ID!) {
    deletePost(id: $id)
  }
`;
