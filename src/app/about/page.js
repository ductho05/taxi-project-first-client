'use client';

import React from 'react';
import styles from './About.module.scss';
import classNames from 'classnames/bind';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Carousel } from 'antd';

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
    en_call_text,
    en_title_part,
} from '@/constant/en_constant';

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
    call_text,
    title_part,
} from '@/constant/constant';
// import {
//     content_footer,
//     links,
//     service_info,
//     title,
//     slides,
//     info_content,
//     info_feetback,
//     SDT,
//     info_commit,
//     title_info,
// } from '../../constant/constant';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import Link from 'next/link';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const cx = classNames.bind(styles);

const About = () => {
    var langCode =  'vi';
    if (typeof localStorage !== 'undefined') {
        langCode = localStorage.getItem('lang') || 'vi'
    }

    const lib_object =
        langCode == 'vi'
            ? {
                  com_name,
                  noti_text,
                  title,
                  detail_links,
                  lang,
                  SDT,
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
                  call_text,
                  title_part,
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
                  call_text: en_call_text,
                  title_part: en_title_part,
              };

    // const {
    //     com_name,
    //     noti_text,
    //     title,
    //     detail_links,
    //     lang,
    //     SDT,
    //     links,
    //     content_footer,
    //     slides,
    //     info_content,
    //     info_commit,
    //     info_feetback,
    //     title_info,
    //     service_info,
    //     socials,
    //     content_title_footer,
    // } = lib_object;
    const sdt = 'tel:' + lib_object.SDT;

    // let sdt = 'tel:' + SDT;

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
    //     service_info,
    //     title,
    //     slides,
    //     info_content,
    //     info_feetback,
    //     SDT,
    //     info_commit,
    //     title_info,

    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <img
                    src="https://cdn.pixabay.com/photo/2016/08/06/12/34/taxi-1574278_1280.jpg"
                    alt="background"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        opacity: 0.8,
                        filter: 'brightness(50%)', // Điều chỉnh độ sáng ở đây, 50% có nghĩa là làm tối 50%
                    }}
                    className={cx('background')}
                />
                <div className={cx('heading_info')}>
                    {/* <h3 className={cx('heading_title')}>Thông tin</h3> */}
                    <p className={cx('about')}>{lib_object.title_part[1].content[0].title}</p>
                    <p className={cx('about2')}>{lib_object.title_part[1].content[0].content[0]}</p>
                    <p className={cx('about2')}>{lib_object.title_part[1].content[0].content[1]}</p>
                </div>
                <div className={cx('overlay')}></div>
            </div>

            <div className={cx('welcome_wrapper')}>
                <p className={cx('welcome')}>{lib_object.title_part[1].content[1].title}</p>
            </div>

            <div className={cx('reviews')}>
                <p className={cx('heading_title_2')}>{`"${lib_object.title_part[1].content[1].content}"`}</p>
                <div className={cx('background_image')}>
                    <img
                        src={lib_object.title_part[1].content[0].content[2]}
                        alt={`background`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            // opacity: 0.8,
                            // filter: 'brightness(30%)', // Điều chỉnh độ sáng ở đây, 50% có nghĩa là làm tối 50%
                        }}
                    />
                </div>
                {lib_object.title_info.map((item, index) =>
                    index != lib_object.title_info.length - 1 ? (
                        <>
                            <div className={cx('title_info_wraaper')}>
                                <div className={cx('icon')}>{index + 1}</div>{' '}
                                <div className={cx('title_info_wraaper_text')}>{item.title}</div>
                            </div>
                            <p className={cx('message')}>{item.content}</p>
                            <div className={cx('title_info_span')}></div>
                        </>
                    ) : (
                        <>
                            <div className={cx('title_info_wraaper')}>
                                <div className={cx('icon_gift')}>{index + 1}</div>{' '}
                                <div className={cx('title_info_wraaper_text_gift')}>{item.title}</div>
                            </div>
                            <p className={cx('message')}>{item.content}</p>
                            {/* <div className={cx('title_info_span')}></div> */}
                            <div className={cx('order')}>
                                <div onClick={handleCall} className={cx('btn_order')}>
                                    {lib_object.call_text}
                                </div>
                            </div>
                        </>
                    ),
                )}
            </div>

            <div className={cx('welcome_wrapper')}>
                <p className={cx('welcome')}>{lib_object.title_part[1].content[2].title}</p>
            </div>

            <div className={cx('feature_list')}>
                <div className={cx('right')}>
                    {lib_object.service_info.content.map((item, index) => (
                        <div className={cx('feature_item')} key={index}>
                            <div className={cx('icon')}>{index + 1}</div>
                            <div className={cx('feature_content')}>
                                <p className={cx('feature_title')}>{item.title}</p>
                                <p className={cx('feature_description')}>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('background_car')}>
                    <img src="./car.jpg" alt="car" />
                </div>
            </div>

            <div className={cx('welcome_wrapper')}>
                <p className={cx('welcome')}>{lib_object.title_part[1].content[3].title}</p>
            </div>

            <div className={cx('feetback_wrapper')}>
                <Carousel>
                    {lib_object.info_feetback.content.map((item, index) => {
                        return (
                            <div key={index} className={cx('feetback_block')}>
                                <h3 className={cx('feetback_block_content')}>
                                    <div className={cx('text_feetback')}>{`"${item.content}"`}</div>
                                    <div className={cx('user_feetback')}>{item.name}</div>
                                </h3>
                            </div>
                        );
                    })}

                    {/* <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div> */}
                </Carousel>
            </div>

            {/* <div className={cx('services', 'grid')}>
                <img
                    src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg"
                    className={cx('background')}
                />
                <div className={cx('heading_info')}>
                    <h3 className={cx('heading_title')}>Những dịch vụ mà chúng tôi đem lại</h3>
                    <p className={cx('about')}>Chào mừng đến với chúng tôi</p>
                    <p className={cx('message')}>
                        Chúng tôi đã tạo ra taxi của mình để giúp bạn tìm thấy các dịch vụ taxi chất lượng cao nhất và
                        đáng tin cậy nhất, mọi lúc, mọi nơi. <br />
                        Tất cả các tài xế của chúng tôi đều mặc đồng phục và được cấp phép đầy đủ.
                    </p>

                    <ul className={cx('services_list', 'row')}>
                        <li className={cx('services_item', 'col l-3 m-3 c-12')}>
                            <AddLocationAltIcon className={cx('item_icon')} />
                            <h3 className={cx('item_title')}>Nhận địa chỉ</h3>
                            <p className={cx('item_description')}>
                                Chúng tôi luôn đón khách hàng đúng giờ, sẵn sàng phục vụ 24/7.
                            </p>
                        </li>

                        <li className={cx('services_item', 'col l-3 m-3 c-12')}>
                            <FlightLandIcon className={cx('item_icon')} />
                            <h3 className={cx('item_title')}>Đưa đón sân bay</h3>
                            <p className={cx('item_description')}>
                                TaxiBuonMaThuat chuyên cung cấp dịch vụ đưa đón sân bay 24/24.
                            </p>
                        </li>

                        <li className={cx('services_item', 'col l-3 m-3 c-12')}>
                            <SocialDistanceIcon className={cx('item_icon')} />
                            <h3 className={cx('item_title')}>Khoảng cách xa</h3>
                            <p className={cx('item_description')}>
                                Chúng tôi cung cấp cho bạn dịch vụ taxi đường dài đến bất cứ đâu.
                            </p>
                        </li>

                        <li className={cx('services_item', 'col l-3 m-3 c-12')}>
                            <DirectionsCarIcon className={cx('item_icon')} />
                            <h3 className={cx('item_title')}>Chuyến tham quan bằng taxi</h3>
                            <p className={cx('item_description')}>
                                Chúng tôi cung cấp các tour du lịch bằng taxi với nhiều thời lượng và độ phức tạp khác
                                nhau.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={cx('overlay')}></div>
            </div> */}
        </div>
    );
};

export default About;
