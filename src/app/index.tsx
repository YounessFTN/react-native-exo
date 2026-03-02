import { useState } from "react";
import { StyleSheet } from "react-native";
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

  function handleDelete(id: number) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            titre={item.titre}
            status={item.status}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
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
});
