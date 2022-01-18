import { gql } from "@apollo/client";

export const REPOS_QUERY = gql`
  query {
    viewer {
      name
      repositories(first: 3, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          id
          name
          description
          createdAt
          forkCount
          url
        }
      }
    }
  }
`;
