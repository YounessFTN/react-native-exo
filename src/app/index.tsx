import { useState } from "react";
import { Button, ScrollView, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ItemCard } from "@/components/item-card";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

const ITEMS = [
  { id: 1, titre: "Réviser React Native", status: "En cours" },
  { id: 2, titre: "Faire les courses", status: "Terminé" },
  { id: 3, titre: "Faire du sport", status: "Abandonné" },
  { id: 4, titre: "Lire un livre", status: "En cours" },
];

export default function HomeScreen() {
  const [items, setItems] = useState(ITEMS);
  const [task, setTask] = useState("");

  function handleDelete(id: number) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }
  function addTodo(title: string) {
    const newItem = {
      id: Date.now(),
      titre: title,
      status: "En cours",
    };
    setItems([...items, newItem]);
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TextInput
          style={styles.input}
          placeholder="Ajouter une nouvelle tâche"
          value={task}
          onChangeText={setTask}
        />
        <Button
          onPress={() => addTodo(task)}
          title="Ajouter une tâche"
          accessibilityLabel="Ajouter une nouvelle tâche"
        />
        <ScrollView>
          {items.map((item) => (
            <ItemCard
              key={item.id}
              titre={item.titre}
              status={item.status}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: Spacing.four * 8,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: "center",
  },
  code: {
    textTransform: "uppercase",
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.two,
    marginVertical: Spacing.two,
  },
});
