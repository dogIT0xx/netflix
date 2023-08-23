import classNames from 'classnames/bind'

import styles from './BillBoard.module.scss'
import { titleLogo, billboardBackground } from '~/assets/images'
import { play, circleInfo, refresh } from '~/assets/icons'

const cx = classNames.bind(styles)

function BillBoard() {
  return (
    <div className={cx('container')}>
      <img
        alt=""
        className={cx('background-static')}
        src={billboardBackground}
      />
      <div className={cx('layer')}>
        <img alt="" className={cx('title-logo')} src={titleLogo} />
        <div className={cx('track-content')}>
          Eight thieves take hostages and lock themselves in the Royal Mint of
          Spain as a criminal mastermind manipulates the police to carry out his
          plan.
        </div>
        <div className={cx('action-btn')}>
          <div className={cx('action-btn-left')}>
            <button className={cx('btn', 'play-btn')}>
              <img src={play} alt="" />
              <span className={cx('btn__text')}>Play</span>
            </button>
            <button className={cx('btn', 'more-info-btn')}>
              <img src={circleInfo} alt="" />
              <span className={cx('btn__text')}>More Info</span>
            </button>
          </div>
          <div className={cx('action-btn-right')}>
            <button className={cx('btn', 'audio-btn')}>
              <img src={refresh} alt="" />
            </button>
            <span className={cx('maturity-rating')}>18+</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillBoard
