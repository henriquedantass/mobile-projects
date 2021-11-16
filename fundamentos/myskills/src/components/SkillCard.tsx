import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function SkillCard({ title }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} key={Math.random()}>
      <Text style={styles.textSkill}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: "center",
  },
  textSkill: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
