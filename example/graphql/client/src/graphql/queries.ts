import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GET_POSTS {
    posts {
      id
      title
      content
      author {
        id
        name
      }
    }
  }
`;

export const GET_POST = gql`
  query GET_POST($id: ID!) {
    getPost(id: $id) {
      title
    }
  }
`;

export const GET_ALL_POSTS = `
query GET_POSTS {
    posts {
      id
      title
      content
      author {
        id
        name
      }
    }
  }`;


export const GET_PAGINATED = gql`
  query GET_PAGINATED($page: Int!, $limit: Int!) {
    posts(page: $page, limit: $limit) {
      id
      title
      content
      author {
        id
        name
      }
    }
  }`;
