import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { GradientColors } from '@/constants/theme';
import { s, vs, ms } from '@/utils/scaling';

/**
 * Renders the app header with a horizontal gradient background, the title "Blackout", and three right-aligned action buttons (Profile, Notifications, Settings).
 *
 * The buttons currently invoke placeholder handlers that log TODO messages to the console; navigation and functionality are not implemented.
 *
 * @returns The header's root JSX element containing the gradient background, title text, and action buttons.
 */
export function AppHeader() {
  const colorScheme = useColorScheme();

  // TODO: Configure button functionality
  const handleProfilePress = () => {
    console.log('Profile button pressed - TODO: Add navigation');
  };

  const handleNotificationsPress = () => {
    console.log('Notifications button pressed - TODO: Add functionality');
  };

  const handleSettingsPress = () => {
    console.log('Settings button pressed - TODO: Add navigation');
  };

  return (
    <LinearGradient
      colors={[GradientColors.start, GradientColors.middle, GradientColors.end]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      <View style={styles.headerContent}>
        <Text style={styles.title}>
          Blackout
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleProfilePress}
          >
            <Text style={styles.buttonText}>
              Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleNotificationsPress}
          >
            <Text style={styles.buttonText}>
              Notifications
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSettingsPress}
          >
            <Text style={styles.buttonText}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(50),
    paddingBottom: vs(12),
    paddingHorizontal: s(16),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: s(8),
  },
  title: {
    fontSize: ms(20, 0.3),
    fontWeight: 'bold',
    color: '#ffffff',
    flexShrink: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: s(6),
    flexShrink: 1,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  button: {
    paddingVertical: ms(6, 0.2),
    paddingHorizontal: ms(10, 0.2),
    borderRadius: ms(6, 0.3),
    backgroundColor: 'rgba(90, 138, 149, 0.25)',
    borderWidth: 1,
    borderColor: 'rgba(90, 138, 149, 0.4)',
  },
  buttonText: {
    fontSize: ms(11, 0.3),
    fontWeight: '600',
    color: '#E8F1F5',
  },
});