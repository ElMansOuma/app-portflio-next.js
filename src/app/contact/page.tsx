import styles from '@/styles/Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1>Contactez-moi</h1>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required />
                </div>
                <button type="submit" className={styles.button}>
                    Envoyer
                </button>
            </form>
        </div>
    );
}