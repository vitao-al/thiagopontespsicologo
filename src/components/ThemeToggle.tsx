import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-musgo hover:bg-laranja dark:hover:bg-musgo transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-musgo hover:text-musgo dark:bg-gold-500" />
      ) : (
        <Sun className="h-5 w-5 text-musgo dark:text-laranja dark:text-neutral-900 dark:hover:laranja" />
      )}
    </button>
  );
}