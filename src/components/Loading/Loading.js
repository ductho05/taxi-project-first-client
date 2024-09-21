import React from 'react'
import classNames from 'classnames/bind'
import styles from './Loading.module.scss'
import CircularProgress from '@mui/material/CircularProgress';

const cx = classNames.bind(styles)

const Loading = () => {
  return (
    <div className={cx('wrapper')}>
        <span className={cx('label')}>Loading...</span>
        <CircularProgress color="secondary" />
    </div>
  )
}

export default Loading