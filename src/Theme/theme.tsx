import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { ThemeContext, STORAGE_KEYS } from './ThemeContext';

// Provider Props
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultDarkMode?: boolean;
}

// Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultDarkMode = false 
}) => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
      return savedTheme ? JSON.parse(savedTheme) : defaultDarkMode;
    } catch {
      return defaultDarkMode;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.DARK_MODE, JSON.stringify(darkMode));
      document.documentElement.classList.toggle('dark', darkMode);
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev: boolean) => !prev);
  }, []);

  const contextValue = useMemo(() => ({
    darkMode,
    toggleDarkMode
  }), [darkMode, toggleDarkMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};


