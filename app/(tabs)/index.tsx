import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { GradientColors } from '@/constants/theme';
import { s, vs, ms } from '@/utils/scaling';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

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

        <TouchableOpacity
          onPress={() => router.push('/lock-in')}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={[GradientColors.accent, GradientColors.lightAccent]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <ThemedText style={styles.buttonText}>
              Are You Ready to Lock In?
            </ThemedText>
          </LinearGradient>
        </TouchableOpacity>

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
    justifyContent: 'center',
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
  button: {
    padding: s(20),
    borderRadius: ms(12),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    fontSize: ms(18),
    fontWeight: '600',
    color: '#E8F1F5',
    textAlign: 'center',
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
