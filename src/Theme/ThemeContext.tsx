import { createContext } from 'react';

// Types
export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Constants
export const STORAGE_KEYS = {
  DARK_MODE: 'darkMode',
} as const;

// Context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
ThemeContext.displayName = 'ThemeContext';
