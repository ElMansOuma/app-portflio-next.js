
import Link from 'next/link';
import styles from '@/styles/Sidebar.module.css';
 export default function Sidebar() {
     return (
         <aside className={styles.sidebar}>
             <p></p><br/><br/><br/>

             <nav className={styles.nav}>
                 <Link href="/" className={styles.navButton}>
                   <b>Accueil</b>
                 </Link>
                 <Link href="/projets">
                     <b>Projets</b>
                 </Link>
                 <Link href="/contact">
                     <b>Contact</b>
                 </Link>
             </nav>
         </aside>
     );
 }