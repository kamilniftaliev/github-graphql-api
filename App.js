import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "./apollo";

import RepositoriesList from "./components/repositories";
import Auth from "./components/auth";

const styles = StyleSheet.create({
  container: {
    width: 400,
    margin: "auto",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    padding: 20,
  },
});

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleSubmit = useCallback((newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }, []);

  const handleLogOut = useCallback(() => {
    setToken("");
    localStorage.removeItem("token");
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <View style={styles.container}>
        {token ? (
          <RepositoriesList onLogOut={handleLogOut} />
        ) : (
          <Auth onSubmit={handleSubmit} />
        )}
      </View>
    </ApolloProvider>
  );
}
