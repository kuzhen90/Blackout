import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * Provide the active color scheme for web, using a deterministic `"light"` value during initial render to support static rendering.
 *
 * @returns The active color scheme — `'light'`, `'dark'`, or `null` — where `'light'` is returned before client-side hydration.
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();

  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}