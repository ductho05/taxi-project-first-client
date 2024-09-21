// components/MarqueeNotification.js
import React from 'react';
import { Layout, Typography } from 'antd';
import styles from './MarqueeNotification.module.scss'; // Import file CSS module

import classNames from 'classnames/bind';

const { Header } = Layout;
const { Text } = Typography;
const cx = classNames.bind(styles);
const MarqueeNotification = ({ message }) => {
    return (
        <Header className={cx('marqueeContainer')}>
            <div className={cx('marquee')}>
                <Text strong className={cx('text')}>
                    {message}
                </Text>
            </div>
        </Header>
    );
};

export default MarqueeNotification;
