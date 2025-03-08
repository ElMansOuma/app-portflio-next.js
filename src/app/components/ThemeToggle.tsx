'use client';

import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [theme]);

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 Mode sombre' : '☀️ Mode clair'}
        </button>
    );
}