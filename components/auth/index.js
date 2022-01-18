import React, { useState } from "react";
import { Text, TextInput, Pressable } from "react-native";

import { NEW_ACCESS_TOKEN_URL } from "../../constants";

import styles from "./styles";

export default function Auth({ onSubmit }) {
  const [text, onChangeText] = useState("");

  return (
    <>
      <Text>
        Please paste your access token below. You can generate one{" "}
        <Text
          style={styles.link}
          onPress={() => window.open(NEW_ACCESS_TOKEN_URL, "_blank")}
        >
          here
        </Text>
        . Make sure you select "repo" related scopes.
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Pressable style={styles.button} onPress={() => onSubmit(text)}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </>
  );
}
