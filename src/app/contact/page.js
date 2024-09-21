import React from 'react'
import classNames from 'classnames/bind'
import styles from './Contact.module.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const cx = classNames.bind(styles)

const Contact = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <img src='https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/1/3/1133990/Toyota-Vios-2023-01.jpeg' alt='background' className={cx('background')} />
                <div className={cx('heading_info')}>
                    <h3 className={cx('heading_title')}>Liên lạc</h3>
                    <p className={cx('about')}>Thông tin Liên lạc</p>
                </div>
                <div className={cx('overlay')}></div>
            </div>

            <div className={cx('contact')}>
                <h3 className={cx('heading_title')}>Làm thế nào chúng tôi có thể giúp bạn</h3>
                <p className={cx('about')}>Có một câu hỏi?</p>
                <p className={cx('message')}>Nếu bạn có bất kỳ ý kiến, đề xuất hoặc câu hỏi nào, xin vui lòng liên hệ với chúng tôi. Đội ngũ nhân viên văn phòng chất lượng cao của chúng tôi sẽ giúp đỡ và giải đáp mọi thắc mắc của bạn.</p>
                <ul className={cx('contact_list')}>
                    <li className={cx('contact_item')}>
                        <div className={cx('icon')}>
                            <LocationOnIcon className={cx('icon_img')} />
                        </div>
                        <p className={cx('contact_title')}>Địa chỉ của chúng tôi</p>
                        <p className={cx('contact_content')}>Buôn Ma Thuột, Đăk Lăk</p>
                    </li>

                    <li className={cx('contact_item')}>
                        <div className={cx('icon')}>
                            <WifiCalling3OutlinedIcon className={cx('icon_img')} />
                        </div>
                        <p className={cx('contact_title')}>Điện thoại</p>
                        <p className={cx('contact_content')}>0566814814</p>
                    </li>

                    <li className={cx('contact_item')}>
                        <div className={cx('icon')}>
                            <EmailOutlinedIcon className={cx('icon_img')} />
                        </div>
                        <p className={cx('contact_title')}>Email</p>
                        <p className={cx('contact_content')}>ductho23pro@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact