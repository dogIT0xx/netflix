import classNames from 'classnames/bind'

import styles from './styles/Banner.module.scss'

const cx = classNames.bind(styles)

function Banner({ imgInfo, callToAction }) {
  return (
    <div className={cx('container')}>
      <div className={cx('CTA')}>
        <span className={cx('title')}>{callToAction.title}</span>
        <span className={cx('detail')}>{callToAction.detail}</span>
      </div>
      <img className={cx('img')} src={imgInfo.src} alt={imgInfo.alts}></img>
    </div>
  )
}

export default Banner
