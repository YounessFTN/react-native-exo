import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

type Status = "En cours" | "Terminé" | "Abandonné";

const STATUS_CYCLE: Status[] = ["En cours", "Terminé", "Abandonné"];

const STATUS_COLORS: Record<Status, string> = {
  "En cours": "#f59e0b",
  "Terminé": "#22c55e",
  "Abandonné": "#6b7280",
};

type TypeList = {
  titre: string;
  status: Status;
  onDelete: () => void;
  onStatusChange?: (status: Status) => void;
};

export function ItemCard({ titre, status, onDelete, onStatusChange }: TypeList) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(titre);
  const [currentStatus, setCurrentStatus] = useState<Status>(status);

  function handleStatusChange() {
    const nextIndex = (STATUS_CYCLE.indexOf(currentStatus) + 1) % STATUS_CYCLE.length;
    const nextStatus = STATUS_CYCLE[nextIndex];
    setCurrentStatus(nextStatus);
    onStatusChange?.(nextStatus);
  }

  function handleDelete() {
    Alert.alert("Supprimer", "Tu veux vraiment supprimer cet item ?", [
      { text: "Annuler", style: "cancel" },
      { text: "Supprimer", style: "destructive", onPress: onDelete },
    ]);
  }

  function handleSave() {
    setIsEditing(false);
  }

  const styles = StyleSheet.create({
    card: { padding: 16, marginBottom: 12, borderRadius: 8, gap: 8 },
    input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 8 },
    buttons: { flexDirection: "row", gap: 8 },
    button: { flex: 1, padding: 10, borderRadius: 6, alignItems: "center" },
    editButton: { backgroundColor: "#3b82f6" },
    saveButton: { backgroundColor: "#22c55e" },
    deleteButton: { backgroundColor: "#ef4444" },
    deleteText: { color: "#fff" },
  });

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          autoFocus
        />
      ) : (
        <ThemedText type="subtitle">{value}</ThemedText>
      )}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: STATUS_COLORS[currentStatus] }]}
        onPress={handleStatusChange}
      >
        <ThemedText style={styles.deleteText}>{currentStatus}</ThemedText>
      </TouchableOpacity>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[
            styles.button,
            isEditing ? styles.saveButton : styles.editButton,
          ]}
          onPress={() => setIsEditing(!isEditing)}
        >
          <ThemedText>{isEditing ? "Sauvegarder" : "Editer"}</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={handleDelete}
        >
          <ThemedText style={styles.deleteText}>Supprimer</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}
