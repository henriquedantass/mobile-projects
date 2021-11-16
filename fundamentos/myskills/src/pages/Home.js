import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  const [newSkill, setNewSkill] = useState();
  const [mySkills, setMySkills] = useState([]);

  function handleNewAddSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Henrique Dantas</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleNewAddSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { marginTop: 30 }]}>My Skills</Text>
      {mySkills.map((skill) => (
        <TouchableOpacity style={styles.buttonSkill} key={Math.random()}>
          <Text style={styles.skill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: "#f1f1f1",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
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
  buttonSkill: {
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 50,
    marginTop: 15,
    alignItems: "center",
  },
  skill: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
