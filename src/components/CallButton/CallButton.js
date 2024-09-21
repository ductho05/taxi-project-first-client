// import React from 'react';
// import classNames from 'classnames/bind';
// import styles from './CallButton.module.scss';
// import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
// import Link from 'next/link';
// import { Player } from '@lottiefiles/react-lottie-player';
// import animationData from '../../../public/call.json'; // Thay thế bằng đường dẫn đến file JSON của bạn

// const cx = classNames.bind(styles);

// const CallButton = () => {
//     return (
//         <div className={cx('wrapper')}>
//             <Link href="tel:0566814814">
//                 {/* <PermPhoneMsgIcon className={cx('icon')} /> */}
//                 <Player autoplay loop src={animationData} style={{ height: '300px', width: '300px' }}></Player>
//             </Link>
//         </div>
//     );
// };

// export default CallButton;

// src/components/CallButton/CallButton.js

'use client'; // Chỉ định đây là một Client Component

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../../public/call.json'; // Đường dẫn đến file JSON của bạn
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './CallButton.module.scss'; // Đảm bảo đường dẫn đến file CSS đúng
import { SDT } from '@/constant/constant';
const cx = classNames.bind(styles);

const CallButton = () => {
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
    return (
        <div className={cx('wrapper', 'wrapper-mobile')}>
            {/* <Link href={sdt}> */}
            {/* <PermPhoneMsgIcon /> */}
            {/* <Player autoplay loop src={animationData} style={{ height: '150px', width: '150px' }} /> */}
            {/* </Link> */}
            <div onClick={handleCall}>
                <Player
                    autoplay
                    loop
                    src={animationData}
                    style={{ height: '150px', width: '150px', cursor: 'pointer' }}
                />
            </div>
        </div>
    );
};

export default CallButton;
