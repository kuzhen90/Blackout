import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';

/**
 * Renders a bottom-tab pressable that triggers a light iOS haptic when pressed.
 *
 * The component forwards all received BottomTabBarButtonProps to PlatformPressable and
 * invokes the original `onPressIn` handler after emitting a soft haptic on iOS.
 *
 * @param props - Props forwarded to the underlying PlatformPressable
 * @returns A PlatformPressable element configured for bottom-tab use with added iOS haptic feedback
 */
export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}