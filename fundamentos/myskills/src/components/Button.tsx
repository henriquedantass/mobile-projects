import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A330F7",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 15,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 7,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
