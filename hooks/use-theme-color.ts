/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

/**
 * Resolve a color value for the active color scheme, allowing optional per-theme overrides.
 *
 * @param props - Optional per-theme overrides; may contain `light` and/or `dark` color strings
 * @param colorName - Key of the color in the theme palettes; looked up on the active theme when no override is provided
 * @returns The resolved color string: the override from `props` for the active theme if present, otherwise the color from `Colors` for that theme
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}