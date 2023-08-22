import classNames from 'classnames/bind'

import styles from './BillBoard.module.scss'
import { Button } from '~/components/common'
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
          <Button
            className={cx('play-btn')}
            text="Play"
            icon={{ src: play, alt: '' }}
            left-text
          />
          <Button
            className={cx('more-info-btn')}
            text="More Info"
            icon={{ src: circleInfo, alt: '' }}
          />
          <Button
            className={cx('replay-btn')}
            icon={{ src: refresh, alt: '' }}
          />
        </div>
        <span className={cx('maturity-rating')}>18+</span>
      </div>
    </div>
  )
}

export default BillBoard
