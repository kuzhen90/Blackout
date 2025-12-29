import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { GradientColors } from '@/constants/theme';
import { s, vs, ms } from '@/utils/scaling';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <LinearGradient
          colors={[GradientColors.start, GradientColors.middle, GradientColors.end]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 0.5, 1]}
          style={styles.welcomeCard}
        >
          <ThemedText type="title" style={styles.title}>
            Welcome to Blackout
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            Your app starts here
          </ThemedText>
        </LinearGradient>

        <LinearGradient
          colors={[GradientColors.accent, GradientColors.middle]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.infoSection}
        >
          <ThemedText style={styles.infoText}>
            Experience the power of our gradient-themed app
          </ThemedText>
        </LinearGradient>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: s(24),
    gap: vs(24),
    paddingTop: vs(40),
  },
  welcomeCard: {
    padding: s(32),
    borderRadius: ms(16),
    gap: vs(12),
  },
  title: {
    fontSize: ms(32),
    color: '#E8F1F5',
  },
  subtitle: {
    fontSize: ms(16),
    color: '#E8F1F5',
    opacity: 0.85,
  },
  infoSection: {
    padding: s(20),
    borderRadius: ms(12),
  },
  infoText: {
    fontSize: ms(16),
    textAlign: 'center',
    color: '#E8F1F5',
  },
});
