import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";

type Props = {
  title: string;
  icon: string;
  todos: string[];
};

export function Card({ title, icon, todos }: Props) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="subtitle">
        {icon} {title}
      </ThemedText>

      {todos.map((todo, index) => (
        <ThemedText key={index}>• {todo}</ThemedText>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Spacing.three,
    padding: Spacing.four,
    gap: Spacing.two,
    alignSelf: "stretch",
  },
});
