import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Home() {
    return (


    <div className={styles.hero}>
        <ThemeToggle />
            <div className={styles.heroContent}>
                <h1 className={styles.title}>Bienvenue sur mon portfolio</h1>
                <p className={styles.subtitle}>Découvrez mes projets et contactez-moi !</p>
                <div className={styles.buttons}>
                    <Link href="/projets" className={styles.button}>
                        Voir mes projets
                    </Link>
                    <Link href="/contact" className={styles.button}>
                        Me contacter
                    </Link>
                </div>
            </div>
        </div>
    );
}