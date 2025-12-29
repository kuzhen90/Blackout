import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

/**
 * Renders a View whose background color is resolved from the current theme.
 *
 * @param style - Additional view styles; later styles can override the themed background color.
 * @param lightColor - Optional color to use in the light theme; when omitted the theme's default background is used.
 * @param darkColor - Optional color to use in the dark theme; when omitted the theme's default background is used.
 * @returns A View element with the computed themed background color applied and all other props forwarded.
 */
export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}