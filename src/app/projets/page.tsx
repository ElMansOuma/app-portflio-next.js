import styles from '@/styles/Projets.module.css';

export default function Projets() {
    return (
        <div className={styles.container}>

            <h1>Mes Projets</h1>
            <div className={styles.grid}>
                {/* Projet 1 : Site E-commerce */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h2>Site E-commerce</h2>
                        <p>
                            Un site e-commerce développé avec Next.js, React et Stripe pour les paiements.
                        </p>
                        <div className={styles.technologies}>
                            <span>Next.js</span>
                            <span>React</span>
                            <span>Stripe</span>
                        </div>
                    </div>
                </div>

                {/* Projet 2 : Blog Personnel */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h2>Blog Personnel</h2>
                        <p>
                            Un blog personnel avec un système de gestion de contenu (CMS) intégré.
                        </p>
                        <div className={styles.technologies}>
                            <span>Next.js</span>
                            <span>React</span>
                            <span>GraphQL</span>
                        </div>
                    </div>
                </div>

                {/* Projet 3 : Application de Gestion de Tâches */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h2>Application de Gestion de Tâches</h2>
                        <p>
                            Une application de gestion de tâches avec authentification utilisateur.
                        </p>
                        <div className={styles.technologies}>
                            <span>Next.js</span>
                            <span>React</span>
                            <span>Firebase</span>
                        </div>
                    </div>
                </div>

                {/* Projet 4 : Portfolio en Ligne */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h2>Portfolio en Ligne</h2>
                        <p>
                            Un portfolio en ligne pour présenter mes projets et compétences.
                        </p>
                        <div className={styles.technologies}>
                            <span>Next.js</span>
                            <span>React</span>
                            <span>CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}