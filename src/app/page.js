'use client';
import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './page.module.scss';
import MapboxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DoNotDisturbOnTotalSilenceOutlinedIcon from '@mui/icons-material/DoNotDisturbOnTotalSilenceOutlined';
import FindReplaceOutlinedIcon from '@mui/icons-material/FindReplaceOutlined';
import Link from 'next/link';
// import { content_footer, SDT, links, socials, title, slides, info_content, info_commit } from '../constant/constant';
import GppGoodIcon from '@mui/icons-material/GppGood';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Button, message } from 'antd';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

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

import InstagramIcon from '@mui/icons-material/Instagram';
const cx = classNames.bind(styles);
export default function Home() {
    var langCode =  'vi';
    if (typeof localStorage !== 'undefined') {
        langCode = localStorage.getItem('lang')
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

    // let {
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

    //content_footer, SDT, links, socials, title, slides, info_content, info_commit
    // console.log('lib_object', lib_object);

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
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'info',
            content: 'Tính năng đang cập nhập',
            duration: 4,
        });
    };
    const [slide, setSlide] = useState(lib_object.slides[0]);
    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [dateTimeStart, setDateTimeStart] = useState('Chọn ngày giờ');
    const [phone, setPhone] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionsEnd, setSuggestionsEnd] = useState([]);
    const [error, setError] = useState(false);
    const dateTime = useRef();
    const timeouts = useRef(null);

    const geocodingClient = MapboxGeocoding({
        accessToken: 'pk.eyJ1IjoiZHVjdGhvMjMwNSIsImEiOiJjbGxqYjQwbnoxMW1oM2RyNnExcDVhYWt1In0.c6rvxjhaoHST20hqxxjpkQ',
    });

    const resetTimeout = () => {
        if (timeouts.current) {
            clearTimeout(timeouts.current);
        }
    };

    const handleClickSlide = (id) => {
        setSlide(lib_object.slides[id]);
    };

    // const handleShowDateTime = () => {
    //     dateTime.current.showPicker()
    // }

    // const handleChangeValue = async (e) => {
    //     if (e.target.value == '' || e.target.value == null) {
    //         setSuggestions([])
    //     }
    //     setStartLocation(e.target.value)
    //     try {
    //         const response = await geocodingClient.forwardGeocode({
    //             query: startLocation,
    //             countries: ['VN'],
    //             limit: 5,
    //         }).send();

    //         const results = response.body;
    //         setSuggestions(results.features);
    //     } catch (error) {
    //         console.log('Error:', error.message);
    //     }
    // }

    // const handleOnclickSuggest = (value) => {
    //     setStartLocation(value)
    //     setSuggestions([])
    // }

    // const handleOnclickSuggestEnd = (value) => {
    //     setEndLocation(value)
    //     setSuggestionsEnd([])
    // }

    // const handleChangeEndLocation = async (e) => {
    //     setEndLocation(e.target.value)
    //     try {
    //         const response = await geocodingClient.forwardGeocode({
    //             query: endLocation,
    //             countries: ['VN'],
    //             limit: 5,
    //         }).send();

    //         const results = response.body;
    //         setSuggestionsEnd(results.features);
    //     } catch (error) {
    //         console.log('Error:', error.message);
    //     }
    // }

    // const handleChangePhone = (e) => {
    //     setPhone(e.target.value)
    // }

    // const handeleChangeTime = (e) => {
    //     setDateTimeStart(() => e.target.value ? e.target.value : 'Chọn ngày giờ')
    // }

    useEffect(() => {
        if (startLocation != '' && endLocation != '' && dateTimeStart != 'Chọn ngày giờ' && phone != '') {
            setError(true);
        } else {
            setError(false);
        }
    }, [startLocation, endLocation, dateTimeStart, phone]);

    return (
        <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
            {contextHolder}
            <div className={cx('wrapper')}>
                <div className={cx('slides')}>
                    <div className={cx('caption')}>
                        <p className={cx('text')}>{slide.text}</p>
                        <p className={cx('title')}>{slide.title}</p>
                        <span className={cx('content_caption')}>
                            {slide.content.map((item, index) => (
                                <span key={index}>
                                    <GppGoodIcon className={cx('icon_content_caption')} />
                                    {item}
                                    <br />
                                </span>
                            ))}
                        </span>
                    </div>
                    <img
                        src={slide.url}
                        alt={`Slide ${slide.id}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'bottom',
                            // opacity: 0.8,
                            filter: 'brightness(50%)', // Điều chỉnh độ sáng ở đây, 50% có nghĩa là làm tối 50%
                        }}
                    />
                    <div className={cx('overlay')}></div>
                    <ul className={cx('dots')}>
                        {lib_object.slides.map((item) => (
                            <li
                                onClick={() => handleClickSlide(item.id)}
                                key={item.id}
                                className={slide.id == item.id ? cx('dot', 'active') : cx('dot')}
                            ></li>
                        ))}
                    </ul>
                    <div className={cx('order', 'hide_on_mobile_tablet')}>
                        {/* <div className={cx('inputs')}>
                            <div className={cx('order_input')}>
                                <LocationOnIcon className={cx('input_icon')} />
                                <input
                                    onChange={(e) => handleChangeValue(e)}
                                    value={startLocation}
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Điểm đón"
                                />

                                <ul className={cx('search_suggest')}>
                                    {
                                        suggestions.map((item, index) => (
                                            <li onClick={() => handleOnclickSuggest(item.place_name)} key={index} className={cx('suggest_item')}>
                                                <MyLocationOutlinedIcon className={cx('suggest_icon')} />
                                                <p>{item.matching_place_name || item.place_name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className={cx('order_input')}>
                                <LocationOnIcon className={cx('input_icon')} />
                                <input
                                    onChange={(e) => handleChangeEndLocation(e)}
                                    value={endLocation}
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Điểm đến"
                                />

                                <ul className={cx('search_suggest')}>
                                    {
                                        suggestionsEnd.map((item, index) => (
                                            <li onClick={() => handleOnclickSuggestEnd(item.place_name)} key={index} className={cx('suggest_item')}>
                                                <MyLocationOutlinedIcon className={cx('suggest_icon')} />
                                                <p>{item.matching_place_name || item.place_name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className={cx('order_input', 'input_date_time')}>
                                <AccessTimeIcon className={cx('input_icon')} />
                                <label onClick={handleShowDateTime} for='date-time'>{dateTimeStart}</label>
                                <input onChange={(e) => handeleChangeTime(e)} value={dateTimeStart} ref={dateTime} type="datetime-local" id='date-time' />
                            </div>

                            <div className={cx('order_input')}>
                                <LocalPhoneIcon className={cx('input_icon')} />
                                <input value={phone} onChange={(e) => handleChangePhone(e)} type="text" className={cx('input')} placeholder="Số điện thoại" />
                            </div>
                        </div>  */}
                        <div onClick={handleCall} className={cx('btn_order')}>
                            {lib_object.call_text}
                        </div>
                    </div>
                </div>
                <div className={cx('order_on_mobile_tablet', 'hide_on_pc')}>
                    <div className={cx('order')}>
                        {/* <div className={cx('inputs')}>
                            <div className={cx('order_input')}>
                                <LocationOnIcon className={cx('input_icon')} />
                                <input
                                    onChange={(e) => handleChangeValue(e)}
                                    value={startLocation}
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Điểm đón"
                                />

                                <ul className={cx('search_suggest')}>
                                    {
                                        suggestions.map((item, index) => (
                                            <li onClick={() => handleOnclickSuggest(item.place_name)} key={index} className={cx('suggest_item')}>
                                                <MyLocationOutlinedIcon className={cx('suggest_icon')} />
                                                <p>{item.matching_place_name || item.place_name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className={cx('order_input')}>
                                <LocationOnIcon className={cx('input_icon')} />
                                <input
                                    onChange={(e) => handleChangeEndLocation(e)}
                                    value={endLocation}
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Điểm đến"
                                />

                                <ul className={cx('search_suggest')}>
                                    {
                                        suggestionsEnd.map((item, index) => (
                                            <li onClick={() => handleOnclickSuggestEnd(item.place_name)} key={index} className={cx('suggest_item')}>
                                                <MyLocationOutlinedIcon className={cx('suggest_icon')} />
                                                <p>{item.matching_place_name || item.place_name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className={cx('order_input', 'input_date_time')}>
                                <AccessTimeIcon className={cx('input_icon')} />
                                <label onClick={handleShowDateTime} for='date-time'>{dateTimeStart}</label>
                                <input onChange={(e) => handeleChangeTime(e)} value={dateTimeStart} ref={dateTime} type="datetime-local" id='date-time' />
                            </div>

                            <div className={cx('order_input')}>
                                <LocalPhoneIcon className={cx('input_icon')} />
                                <input value={phone} onChange={(e) => handleChangePhone(e)} type="text" className={cx('input')} placeholder="Số điện thoại" />
                            </div>
                        </div> */}

                        <div onClick={handleCall} className={cx('btn_order')}>
                            {lib_object.call_text}
                        </div>
                    </div>
                </div>
                <div className={cx('features')}>
                    {/* <h3 className={cx('main_features')}>Tính năng chính</h3> */}
                    <h4 className={cx('main_title')}>{lib_object.title_part[0].content[0].title}</h4>
                    <p className={cx('main_description')}>{lib_object.title_part[0].content[0].content}</p>

                    <div className={cx('info')}>
                        <div className={cx('info_content')}>
                            {lib_object.info_content.map((item, index) => (
                                <div key={index} className={cx('info_item')}>
                                    <div className={cx('icon2')}>{item.icon}</div>
                                    <div className={cx('text_info')}>{item.title}</div>
                                    <p>{item.content}</p>
                                    {/* <Link className={cx('link')} href={item.url}>
                                        Xem thêm
                                    </Link> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('background_image')}>
                    <img
                        src={lib_object.info_commit.background}
                        alt={`background`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            // opacity: 0.8,
                            filter: 'brightness(30%)', // Điều chỉnh độ sáng ở đây, 50% có nghĩa là làm tối 50%
                        }}
                    />
                    <div className={cx('caption')}>
                        <h4 className={cx('main_title_commit')}>{lib_object.title_part[0].content[1].title}</h4>
                        {/* <p className={cx('title')}>{slide.title}</p> */}
                        <div className={cx('content_caption_commit_block')}>
                            {lib_object.info_commit.content.map((item, index) => (
                                <span key={index} className={cx('content_caption')}>
                                    <h3>{item.title}</h3>
                                    <br className={cx('hide-mobile')} />
                                    {item.content.map((item, index) => (
                                        <span key={index}>
                                            <TaskAltOutlinedIcon className={cx('icon_content_caption')} />
                                            {item}
                                            <br />
                                        </span>
                                    ))}
                                </span>
                            ))}
                            {/* <span className={cx('content_caption')}>
                                    {info_commit.content[0].content.map((item, index) => (
                                        <span key={index}>
                                            <GppGoodIcon className={cx('icon_content_caption')} />
                                            {item}
                                            <br />
                                        </span>
                                    ))}
                                </span> */}

                            {/* <span className={cx('content_caption')}>
                                {info_commit.content.content.map((item, index) => (
                                    <span key={index}>
                                        <GppGoodIcon className={cx('icon_content_caption')} />
                                        {item}
                                        <br />
                                    </span>
                                ))}
                            </span> */}
                        </div>
                    </div>
                </div>
                <div className={cx('info_other')}>
                    <h4 className={cx('main_title')}>{lib_object.title_part[0].content[2].title}</h4>
                    <div className={cx('feature_list')}>
                        <div className={cx('background_car')}>
                            <img src="./car.jpg" alt="car" />
                        </div>

                        <div className={cx('right')}>
                            <Link href={lib_object.links.about}>
                                <div className={cx('feature_item')}>
                                    <div className={cx('icon')}>
                                        <InfoOutlinedIcon className={cx('icon_img')} />
                                    </div>
                                    <div className={cx('feature_content')}>
                                        <p className={cx('feature_title')}>
                                            {lib_object.title_part[0].content[2].content[0].title} {lib_object.title}
                                        </p>
                                        <p className={cx('feature_description')}>
                                            {lib_object.title_part[0].content[2].content[0].content}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <div className={cx('feature_item')}>
                                    <div className={cx('icon')}>
                                        <ConnectWithoutContactOutlinedIcon className={cx('icon_img')} />
                                    </div>
                                    <div className={cx('feature_content')}>
                                        <p className={cx('feature_title')}>
                                            {lib_object.title_part[0].content[2].content[1].title}
                                            {lib_object.title}
                                        </p>
                                        {/* <p className={cx('feature_description')}>
                                            Chúng tôi luôn cập nhật thông tin mới nhất, hãy kết nối với chúng tôi.
                                        </p> */}
                                        <div className={cx('socials')}>
                                            <a href={lib_object.socials[0]}>
                                                <FacebookIcon
                                                    // href=""
                                                    style={{
                                                        color: '#3b5998',
                                                        fontSize: '4rem',
                                                        cursor: 'pointer',
                                                    }}
                                                />
                                            </a>
                                            <a href={lib_object.socials[1]}>
                                                <InstagramIcon
                                                    style={{
                                                        color: '#e4405f',
                                                        fontSize: '4rem',
                                                        cursor: 'pointer',
                                                        marginLeft: '1rem',
                                                    }}
                                                />
                                            </a>
                                            <a href={lib_object.socials[2]}>
                                                <XIcon
                                                    style={{
                                                        color: '#000',
                                                        fontSize: '4rem',
                                                        cursor: 'pointer',
                                                        marginLeft: '1rem',
                                                    }}
                                                />
                                            </a>
                                            <a href={lib_object.socials[3]}>
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
                            </div>
                            <div onClick={success}>
                                <div className={cx('feature_item')}>
                                    <div className={cx('icon')}>
                                        <ArticleOutlinedIcon className={cx('icon_img')} />
                                    </div>
                                    <div className={cx('feature_content')}>
                                        <p className={cx('feature_title')}>
                                            {lib_object.title_part[0].content[2].content[2].title}
                                        </p>
                                        <p className={cx('feature_description')}>
                                            {lib_object.title_part[0].content[2].content[2].content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationOnScroll>
    );
}
