import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header} />

      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Welcome to Blackout
        </ThemedText>

        <ThemedText style={styles.subtitle}>
          Your app starts here
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    backgroundColor: '#A1CEDC',
  },
  content: {
    flex: 1,
    padding: 24,
    gap: 16,
  },
  title: {
    marginTop: 24,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
});
