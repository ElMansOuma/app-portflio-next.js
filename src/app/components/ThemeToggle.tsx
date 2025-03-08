// src/app/components/ThemeToggle.tsx
'use client'; // Indique que ce fichier est un composant client

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 Mode sombre' : '☀️ Mode clair'}
        </button>
    );
}