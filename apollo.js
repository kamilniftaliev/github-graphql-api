import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_API_URL = "https://api.github.com/graphql";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GRAPHQL_API_URL,
});
