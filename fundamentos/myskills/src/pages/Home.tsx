import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface MySkillsProps {
  id: string;
  name: string;
}

export default function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<MySkillsProps[]>([]);
  const [greatings, setGreatings] = useState("");

  function handleNewAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills((oldState) => [...oldState, data]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreatings("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreatings("Good afternoon");
    } else {
      setGreatings("Good night");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Henrique Dantas</Text>
      <Text style={styles.greatings}>{greatings}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button title="Add" onPress={handleNewAddSkill} />

      <Text style={[styles.title, { marginTop: 30 }]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard title={item.name} />}
      />
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
  greatings: {
    color: "#A330F7",
    fontSize: 18,
  },
  input: {
    backgroundColor: "#1F1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
});
