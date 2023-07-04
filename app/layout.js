import './globals.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const euclid = localFont({
    src: '../public/fonts/euclidcircular.ttf',
    variable: '--font-euclid',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${euclid.variable} ${inter.variable}`}>
            <body className="bg-[url('../public/bg-pattern.svg')] bg-cover bg-repeat-y">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
