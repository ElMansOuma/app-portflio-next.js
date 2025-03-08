// src/app/components/Header.tsx
'use client'; // Indique que ce fichier est un composant client

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Icône de portfolio */}
            <div className={styles.icon}>
                <Image
                    src="/icons/portfolio-icon.svg"
                    alt="Portfolio Icon"
                    width={40}
                    height={40}
                />
                <div className={styles.title}>
                    <h1><b>Mon Portfolio</b></h1>
                </div>
            </div>

            {/* Bouton de bascule du thème */}
            <ThemeToggle />
        </header>
    );
}