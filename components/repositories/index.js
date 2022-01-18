import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useQuery } from "@apollo/client";

import { REPOS_QUERY } from "../../queries";

import styles from "./styles";

export default function RepositoriesList({ onLogOut }) {
  const { loading, error, data } = useQuery(REPOS_QUERY, {
    context: {
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    },
  });

  // Log out button - will be reused
  const logOutButton = (
    <Pressable style={styles.logOutButton} onPress={onLogOut}>
      <Text style={styles.logOutButtonText}>Log out</Text>
    </Pressable>
  );

  // Show a spinner while query is loading
  if (loading) {
    return (
      <Image
        source={require("../../icons/spinner.gif")}
        style={styles.spinner}
      />
    );
  }

  // If there's an error, show it to the user
  if (error) {
    return (
      <>
        <Text>Error: {error.message}</Text>
        {logOutButton}
      </>
    );
  }

  const {
    viewer: { name, repositories },
  } = data;

  return (
    <>
      <Text style={styles.title}>{name}`s top 3 latest repositories</Text>
      <View style={styles.reposContainer}>
        {repositories.nodes.map(
          ({ id, name, description, forkCount, url }, index, arr) => (
            <View
              key={id}
              style={[
                styles.repo,
                // Don't apply bottom border on the last item
                index < arr.length - 1 && styles.borderBottom,
              ]}
            >
              <Text style={styles.repoTitle}>{name}</Text>
              <Text style={styles.repoDescription}>{description}</Text>
              <View style={styles.repoFooter}>
                <Text style={styles.repoForks}>Forks: {forkCount}</Text>
                <Text
                  style={styles.link}
                  onPress={() => window.open(url, "_blank")}
                >
                  Link >
                </Text>
              </View>
            </View>
          )
        )}
      </View>
      {logOutButton}
    </>
  );
}
