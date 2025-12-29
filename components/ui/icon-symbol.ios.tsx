import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { StyleProp, ViewStyle } from 'react-native';

/**
 * Render an iOS SymbolView icon configured by name, size, color, style, and weight.
 *
 * @param name - The symbol identifier to render (from `SymbolViewProps['name']`).
 * @param size - Icon width and height in pixels; defaults to 24.
 * @param color - Tint color applied to the symbol.
 * @param style - Additional view styles to merge with the size-based dimensions.
 * @param weight - Visual weight of the symbol (e.g., `'regular'`); defaults to `'regular'`.
 * @returns A JSX element that renders the requested symbol.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: SymbolViewProps['name'];
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}