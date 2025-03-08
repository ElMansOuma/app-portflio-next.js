'use client';

import { useState, FormEvent } from 'react';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success?: boolean;
        message?: string;
    }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simuler un envoi de formulaire - remplacez par votre API réelle
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Réinitialiser le formulaire après succès
            setFormData({ name: '', email: '', message: '' });
            setSubmitStatus({
                success: true,
                message: 'Votre message a été envoyé avec succès! Je vous répondrai dès que possible.'
            });
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'Une erreur est survenue. Veuillez réessayer plus tard.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Contactez-moi</h1>

            {submitStatus.message && (
                <div className={`${styles.alert} ${submitStatus.success ? styles.success : styles.error}`}>
                    {submitStatus.message}
                </div>
            )}

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={styles.button}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
            </form>
        </div>
    );
}