import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  title: string;
}

export function SkillCard({ title, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
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
