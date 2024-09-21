import './globals.css';
import './Grid.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layouts/navbar/Navbar';
import Footer from '@/components/layouts/footer/Footer';
import CallButton from '@/components/CallButton/CallButton';
import { GoogleAnalytics } from '@next/third-parties/google';
import App from './app';
import { com_name } from '@/constant/constant';
// import { en_com_name, en_noti_text, en_title, en_detail_links } from '@/constant/en_constant';
// import { noti_text, title } from '@/constant/constant';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: com_name,
    description: 'Đặt taxi Buôn Ma Thuột nhanh nhất, rẻ nhất. Gọi 5 phút sau có mặt liền',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="favicon.ico" />
                <meta name="google-site-verification" content="rYsGn8wt7ZmP2HJU-TliKBOv4_fhj1UCGC1OzYPKp6U" />
            </head>
            <body className={inter.className}>
                <App>{children}</App>
            </body>
            <GoogleAnalytics gaId="AW-16547190105" />
        </html>
    );
}
