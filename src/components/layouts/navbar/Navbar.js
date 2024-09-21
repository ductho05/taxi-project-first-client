'use client';
import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../../../public/call.json'; // Đường dẫn đến file JSON của bạn
import MarqueeNotification from '../../MarqueeNotification/MarqueeNotification';
import { usePathname } from 'next/navigation';
// import { detail_links } from '@/constant/constant';
const cx = classNames.bind(styles);

const Navbar = ({ lib_object }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const header = useRef();
    const params = usePathname()

    // let langCode = localStorage.getItem('lang');

    const { title, noti_text, detail_links, lang, SDT } = lib_object;

    let sdt = 'tel:' + SDT;

    const isMobile = () => {
        // Kiểm tra user agent để xem có phải là thiết bị di động không
        return /Mobi|Android/i.test(navigator.userAgent);
    };

    const handleCall = () => {
        if (isMobile()) {
            window.location.href = sdt;
        } else {
            alert('Chức năng gọi điện chỉ hoạt động trên thiết bị di động.');
        }
    };

    // lấy param url hiện tại
    const url = params
    console.log(url)

    useEffect(() => {
        detail_links.map((link, index) => {
            if (link.url == url) {
                setCurrentPage(index);
            }
        });
        // console.log('idasj', url);
    }, [url]);

    const handeClickPage = (index) => {
        setCurrentPage(index);
        setOpenMenu(false);
    };

    const changeLang = () => {
        let lang = 'vi'
        if (typeof localStorage !== 'undefined') {
            lang = localStorage.getItem('lang') || 'vi';
        if (lang == 'vi') {
            localStorage.setItem('lang', 'en');
        } else {
            localStorage.setItem('lang', 'vi');
        }
        // load lại trang
        window.location.reload();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        scrollTop > 0 ? setIsSticky(true) : setIsSticky(false);
    };

    const handleOpenMenu = () => {
        setOpenMenu(true);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    return (
        <div className={cx('wrapper')}>
            {/* <div className={cx('heading')}>
                <Link href='tel:0566814814' className={cx('phone')}>
                    <LocalPhoneIcon className={cx('phone_icon')} />
                    0566814814
                </Link>
            </div> */}
            <div ref={header} className={isSticky ? cx('bottom', 'sticky') : cx('bottom')}>
                <Link href="/" className={cx('logo-wrapper')}>
                    <img src="/LOGO.png" className={cx('logo')} />
                    <div className={cx('text-logo')}>{title}</div>
                </Link>
                <div className={cx('noti-wrapper', 'hide-on-mobile-pc', 'hide-laptop-mini')}>
                    <MarqueeNotification message={noti_text} />
                </div>
                <div className={cx('hide-on-pc')}>
                    <div className={cx('text-logo-normal')}>{title}</div>
                    <div onClick={handleCall} className={cx('phone_icon')}>
                        <Player autoplay loop src={animationData} style={{ height: '50px', width: '50px' }} />
                        {SDT}
                    </div>
                </div>
                <div className={cx('menu-wrapper')}>
                    <p className={cx('btn_menu', 'hide-on-pc', 'hide-laptop-mini')}>
                        <MenuOutlinedIcon onClick={handleOpenMenu} className={cx('btn_icon')} />
                    </p>
                    <div className={cx('links', 'hide-on-mobile-pc')}>
                        <div onClick={handleCall} className={cx('phone_icon', 'hide-laptop-mini')}>
                            <Player autoplay loop src={animationData} style={{ height: '50px', width: '50px' }} />
                            {SDT}
                            {/* <div className={cx('phone_icon')}></div> */}
                            {/* <LocalPhoneIcon className={cx('phone_icon')} /> */}
                        </div>
                        {detail_links.map((link, index) => (
                            <Link
                                onClick={() => handeClickPage(index)}
                                key={link.id}
                                href={link.url}
                                className={index == currentPage ? cx('link', 'active') : cx('link')}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <div className={cx('change_lang')} onClick={changeLang}>
                            <div className={cx('lang')}>{lang.code}</div>
                            <img src={lang.image} className={cx('flag')} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('noti-wrapper', 'hide-on-pc')}>
                <MarqueeNotification message={noti_text} />
            </div>

            <div className={openMenu ? cx('menu_on_mobile_tablet', 'visiable') : cx('menu_on_mobile_tablet')}>
                <div className={cx('menu_header')}>
                    <Link href="/" className={cx('logo-wrapper')}>
                        <img src="/LOGO.png" className={cx('logo')} />
                        <div className={cx('text-logo')}>{title}</div>
                    </Link>
                    {/* <div className={cx('noti-wrapper', 'hide-on-mobile-pc')}>
                        <MarqueeNotification message={noti_text} />
                    </div> */}
                    <div className={cx('hide-on-pc')}>
                        <div className={cx('text-logo-normal')}>{title}</div>
                        <div onClick={handleCall} className={cx('phone_icon')}>
                            <Player autoplay loop src={animationData} style={{ height: '50px', width: '50px' }} />
                            {SDT}
                        </div>
                        {/* <div className={cx('change_lang')} onClick={changeLang}>
                            <div className={cx('lang')}>{lang.code}</div>
                            <img src={lang.image} className={cx('flag')} />
                        </div> */}
                    </div>
                    <CloseOutlinedIcon onClick={handleCloseMenu} className={cx('btn_close')} />
                </div>

                <ul className={cx('links')}>
                    {detail_links.map((link, index) => (
                        <li key={index}>
                            <Link
                                className={index == currentPage ? cx('link', 'active') : cx('link')}
                                onClick={() => handeClickPage(index)}
                                key={link.id}
                                href={link.url}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                    <li className={cx('link')}>
                        <div className={cx('change_lang')} onClick={changeLang}>
                            <div className={cx('title_lang')}>
                                {typeof localStorage !== "undefined" && localStorage.getItem('lang') == 'en' ? 'language' : 'Ngôn ngữ'}
                            </div>
                            <div className={cx('lang')}>{lang.code}</div>
                            <img src={lang.image} className={cx('flag')} />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
