'use client';
// import './globals.css';
// import './Grid.css';
// // import { Inter } from 'next/font/google';
import Navbar from '@/components/layouts/navbar/Navbar';
import Footer from '@/components/layouts/footer/Footer';
import CallButton from '@/components/CallButton/CallButton';
// import { GoogleAnalytics } from '@next/third-parties/google';

import {
    com_name,
    noti_text,
    title,
    detail_links,
    lang,
    SDT,
    links,
    content_footer,
    slides,
    info_content,
    info_commit,
    info_feetback,
    title_info,
    service_info,
    socials,
    content_title_footer,
} from '@/constant/constant';
import {
    en_com_name,
    en_noti_text,
    en_title,
    en_detail_links,
    en_lang,
    en_SDT,
    en_links,
    en_content_footer,
    en_slides,
    en_info_content,
    en_info_commit,
    en_info_feetback,
    en_title_info,
    en_service_info,
    en_socials,
    en_content_title_footer,
} from '@/constant/en_constant';
// import { noti_text, title } from '@/constant/constant';
// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//     title: com_name,
//     description: 'Đặt taxi Buôn Ma Thuột nhanh nhất, rẻ nhất. Gọi 5 phút sau có mặt liền',
// };
const App = ({ children }) => {
    var langCode =  'vi';
    if (typeof localStorage !== 'undefined') {
        langCode = localStorage.getItem('lang') || 'vi'
    }

    const lib_object =
        langCode == 'vi'
            ? {
                  com_name: com_name,
                  noti_text: noti_text,
                  title: title,
                  detail_links: detail_links,
                  lang: lang,
                  SDT: SDT,
                  links: links,
                  content_footer: content_footer,
                  slides: slides,
                  info_content: info_content,
                  info_commit: info_commit,
                  info_feetback: info_feetback,
                  title_info: title_info,
                  service_info: service_info,
                  socials: socials,
                  content_title_footer: content_title_footer,
              }
            : {
                  com_name: en_com_name,
                  noti_text: en_noti_text,
                  title: en_title,
                  detail_links: en_detail_links,
                  lang: en_lang,
                  SDT: en_SDT,
                  links: en_links,
                  content_footer: en_content_footer,
                  slides: en_slides,
                  info_content: en_info_content,
                  info_commit: en_info_commit,
                  info_feetback: en_info_feetback,
                  title_info: en_title_info,
                  service_info: en_service_info,
                  socials: en_socials,
                  content_title_footer: en_content_title_footer,
              };

    // console.log('lib_obj212ect', langCode);

    return (
        <>
            <Navbar lib_object={lib_object} />
            <CallButton />
            {children}
            <Footer lib_object={lib_object} />
        </>
    );
};

export default App;
