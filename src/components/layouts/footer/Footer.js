// 'use client';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';
// import { content_footer, socials } from '@/constant/constant';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
const cx = classNames.bind(styles);

const Footer = ({ lib_object }) => {
    // let langCode = localStorage.getItem('lang');

    const { title, content_footer, socials, content_title_footer } = lib_object;
    // const { title, noti_text, detail_links, lang, SDT } = lib_object;

    // console.log('content_title_footer', content_title_footer);

    // const { content_footer, socials } = lib_object;

    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className={cx('description', 'col l-3 m-4 c-12')}>
                    <Link href="/" className={cx('logo-wrapper')}>
                        <img src="/LOGO.png" className={cx('logo')} />
                        <div className={cx('text-logo')}>{title}</div>
                    </Link>
                    <p className={cx('content')}>{content_footer.title}</p>
                </div>

                <div className={cx('useful', 'col l-3 m-4 c-12')}>
                    <h3 className={cx('title')}>{content_title_footer[0].title}</h3>
                    <ul className={cx('links')}>
                        <li className={cx('link')}>
                            <ArrowRightIcon className={cx('link_icon')} />

                            <div>{content_title_footer[0].content[0] + content_footer.com_name}</div>
                            {/* <p className={cx('content')}></p> */}
                        </li>

                        <li className={cx('link')}>
                            <ArrowRightIcon className={cx('link_icon')} />
                            <div>{content_title_footer[0].content[1] + ': ' + content_footer.address}</div>
                            {/* <p className={cx('content')}></p> */}
                        </li>

                        <li className={cx('link')}>
                            <ArrowRightIcon className={cx('link_icon')} />
                            <div>{content_title_footer[0].content[2] + ': ' + content_footer.name}</div>
                            {/* <p className={cx('content')}></p> */}
                        </li>

                        <li className={cx('link')}>
                            <ArrowRightIcon className={cx('link_icon')} />
                            <div>{content_title_footer[0].content[3] + ': ' + content_footer.email}</div>
                            {/* <p className={cx('content')}></p> */}
                        </li>
                        <li className={cx('link')}>
                            <ArrowRightIcon className={cx('link_icon')} />
                            <div>{content_title_footer[0].content[4] + ': ' + content_footer.phone}</div>
                            {/* <p className={cx('content')}></p> */}
                        </li>
                    </ul>
                </div>

                <div className={cx('contact', 'col l-3 m-4 c-12')}>
                    <h3 className={cx('title')}>{content_title_footer[1].title}</h3>
                    <ul className={cx('links')}>
                        <li className={cx('link')}>
                            <EmailIcon className={cx('link_icon')} />
                            <p>{content_title_footer[1].content[0]}</p>
                        </li>

                        <li className={cx('link')}>
                            <LocalPhoneIcon className={cx('link_icon')} />
                            <p>{content_title_footer[1].content[1]}</p>
                        </li>

                        <li className={cx('link')}>
                            <LocationOnIcon className={cx('link_icon')} />
                            <p>{content_title_footer[1].content[2]}</p>
                        </li>
                    </ul>
                    {/* <LocationOnIcon className={cx('link_icon')} /> */}
                </div>

                <div className={cx('contact', 'col l-3 m-4 c-12', 'contact-mobile')}>
                    <h3 className={cx('title')}>{content_title_footer[2].title}</h3>
                    <p className={cx('message')}>{content_title_footer[2].content[0]}</p>
                    <div className={cx('input_group')}>
                        <input type="text" placeholder={content_title_footer[2].content[1]} spellCheck={false} />
                        <SendIcon
                            className={cx('input_icon')}
                            onClick={() => {
                                alert('Đã gửi');
                            }}
                        />
                    </div>
                    <div className={cx('socials')}>
                        <a href={socials[0]}>
                            <FacebookIcon
                                // href=""
                                style={{
                                    color: '#3b5998',
                                    fontSize: '4rem',
                                    cursor: 'pointer',
                                }}
                            />
                        </a>
                        <a href={socials[1]}>
                            <InstagramIcon
                                style={{
                                    color: '#e4405f',
                                    fontSize: '4rem',
                                    cursor: 'pointer',
                                    marginLeft: '1rem',
                                }}
                            />
                        </a>
                        <a href={socials[2]}>
                            <XIcon
                                style={{
                                    color: '#000',
                                    fontSize: '4rem',
                                    cursor: 'pointer',
                                    marginLeft: '1rem',
                                }}
                            />
                        </a>
                        <a href={socials[3]}>
                            <YouTubeIcon
                                style={{
                                    color: '#ff0000',
                                    fontSize: '4rem',
                                    cursor: 'pointer',
                                    marginLeft: '1rem',
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <p className={cx('copyright')}>{content_footer.copy_right}</p>
            </div>
        </div>
    );
};

export default Footer;
