import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Card } from "@/components/card";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

const CATEGORIES = [
  {
    title: "En cours",
    icon: "🔄",
    todos: ["Réviser React Native", "Lire un livre", "Manger sainement"],
  },
  {
    title: "Terminé",
    icon: "✅",
    todos: ["Faire les courses", "Appeler le médecin"],
  },
  {
    title: "Abandonné",
    icon: "❌",
    todos: ["Faire du sport"],
  },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {CATEGORIES.map((cat) => (
          <Card
            key={cat.title}
            title={cat.title}
            icon={cat.icon}
            todos={cat.todos}
          />
        ))}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
