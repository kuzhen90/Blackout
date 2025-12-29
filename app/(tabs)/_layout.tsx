import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { AppHeader } from '@/components/app-header';
import { Colors, GradientColors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ms } from '@/utils/scaling';

/**
 * Render the app's top header and a bottom tab navigator with two primary screens.
 *
 * The navigator uses custom colors, a haptic-enabled tab button, and icons for the
 * "Home" and "Explore" tabs.
 *
 * @returns The root JSX element containing the header and tab layout
 */
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <AppHeader />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: GradientColors.lightAccent,
          tabBarInactiveTintColor: GradientColors.accent,
          tabBarStyle: {
            backgroundColor: GradientColors.start,
            borderTopColor: GradientColors.middle,
            borderTopWidth: 1,
          },
          headerShown: false,
          tabBarButton: HapticTab,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={ms(28)} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <IconSymbol size={ms(28)} name="paperplane.fill" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}