import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar';
import Footer from '@/app/components/Footer';
import './globals.css';
import { ThemeProvider } from '@/app/context/ThemeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body>
        <ThemeProvider>
            <Header />
            <div className="main-container">
                <Sidebar />
                <main>{children}</main>
            </div>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}