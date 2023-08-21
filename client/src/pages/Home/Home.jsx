import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import { MainLayout } from '~/layouts'
import { PlaylistCard, Button } from '~/components/common'

const cx = classNames.bind(styles)

function Home() {
  return (
    <MainLayout>
      <main>
        <div className={cx('hero-card-wrapper')}>
          <div className={cx('hero-card-layer')}>
            <img
              alt=" "
              className={cx('title-logo')}
              src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABT4wnuyEJfuW8T1LCaFFlgKwdlIzLz8JKvu-qs6QufURgFl-sO6thZs86_eu8afjIDpy2Z1MUcBEABGhJmbUIRnN9FkUQFn03DeMx4-SVF1ofgqADlddfa7h5BMV1MWAUEqz1M-lGX7IKWZSLLG7XhThUs_MvVvboNpgNQh9fnhkaR9BnmG9cQ.webp?r=c93"
              title=" "
            />
            <div className={cx('track-content')}>
              Kento Yamazaki and Tao Tsuchiya head up an ensemble cast of
              exciting young actors in this sadistic survival game set in a
              desolate, parallel Tokyo.
            </div>
            <div className={cx('action-btn')}>
              <Button className={cx('play-btn')} text="Play" />
              <Button className={cx('more-info-btn')} text="More Info" />
              <Button className={cx('replay-btn')} />
            </div>
            <span className={cx('maturity-rating')}>18+</span>
          </div>
        </div>
        <PlaylistCard />
      </main>
    </MainLayout>
  )
}

export default Home
