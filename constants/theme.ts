/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * Theme based on gradient: linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%)
 */

import { Platform } from 'react-native';

// Gradient colors - Dark sophisticated blue-teal theme
export const GradientColors = {
  start: '#0E1C26',    // hsla(205, 46%, 10%, 1) - Deep navy blue
  middle: '#2A454B',   // hsla(191, 28%, 23%, 1) - Teal-blue
  end: '#2A454B',      // hsla(207, 41%, 27%, 1) - Blue-gray
  accent: '#3D6A73',   // Lighter accent for highlights
  lightAccent: '#5A8A95', // Even lighter for text/icons
};

const tintColorLight = '#0E1C26';
const tintColorDark = '#5A8A95';

export const Colors = {
  light: {
    text: '#0E1C26',
    background: '#ffffff',
    tint: tintColorLight,
    icon: '#2A454B',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#5A8A95',
    background: '#0A1419',
    tint: tintColorDark,
    icon: '#3D6A73',
    tabIconDefault: '#2A454B',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
