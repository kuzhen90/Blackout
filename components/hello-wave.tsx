import Animated from 'react-native-reanimated';

/**
 * Render a waving hand emoji with a brief repeating rotation animation.
 *
 * The component displays a single hand emoji styled for font metrics and animated
 * to rotate 25 degrees at the midpoint of the animation. The animation repeats
 * 4 times with a 300ms duration per cycle.
 *
 * @returns The Animated.Text element containing the waving hand emoji.
 */
export function HelloWave() {
  return (
    <Animated.Text
      style={{
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
        animationName: {
          '50%': { transform: [{ rotate: '25deg' }] },
        },
        animationIterationCount: 4,
        animationDuration: '300ms',
      }}>
      👋
    </Animated.Text>
  );
}