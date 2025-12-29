import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

/**
 * Scales a value based on the device's width
 * @param size - The size to scale
 * @returns The scaled size
 */
export const scale = (size: number): number => {
  return (width / guidelineBaseWidth) * size;
};

/**
 * Scales a value based on the device's height
 * @param size - The size to scale
 * @returns The scaled size
 */
export const verticalScale = (size: number): number => {
  return (height / guidelineBaseHeight) * size;
};

/**
 * Moderately scales a value based on the device's width with a custom resize factor
 * @param size - The size to scale
 * @param factor - The resize factor (default: 0.5)
 * @returns The moderately scaled size
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  return size + (scale(size) - size) * factor;
};

/**
 * Moderately scales a value based on the device's height with a custom resize factor
 * @param size - The size to scale
 * @param factor - The resize factor (default: 0.5)
 * @returns The moderately scaled size
 */
export const moderateVerticalScale = (size: number, factor: number = 0.5): number => {
  return size + (verticalScale(size) - size) * factor;
};

// Short aliases for convenience
export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
