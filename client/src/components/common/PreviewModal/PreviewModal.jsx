import classNames from 'classnames/bind'

import styles from './PreviewModal.module.scss'

const cx = classNames.bind(styles)

function PreviewModal() {
  return (
    <div className={cx('container')}>
      <div className={cx('player')}>
        <img className={cx('title')} src="" alt="" />
        <video className={cx('video')} src="" alt=""></video>
        <button className={cx('muted-toggle')}></button>
      </div>
      <div className={cx('btn-controls')}>
        <button className={cx('play-btn')}></button>
        <button className={cx('add-list-btn')}></button>
        <button className={cx('like-btn')}></button>
        <button className={cx('expant-detail-btn')}></button>
      </div>
      <div className={cx('info')}>
        <div className={cx('meta-data')}>
          <span className={cx('match-score')}></span>
          <span className={cx('maturity-rating')}></span>
          <span className={cx('duration')}></span>
        </div>
        <div className={cx('category-tags')}>
          <span className={cx('category-tag')}></span>
          <span className={cx('category-tag')}></span>
          <span className={cx('category-tag')}></span>
        </div>
      </div>
    </div>
  )
}

export default PreviewModal
