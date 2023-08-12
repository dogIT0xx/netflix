import classNames from 'classnames/bind'

import styles from './styles/Banner.module.scss'

const cx = classNames.bind(styles)

function Banner({ className, imgInfo, text, positionText = 'left' }) {
  return (
    <div className={cx(className, 'container', 'text-' + positionText)}>
      <div className={cx('text')}>
        <span className={cx('title')}>{text.title}</span>
        <span className={cx('sub-title')}>{text.subTitle}</span>
      </div>
      <img className={cx('img')} src={imgInfo.src} alt={imgInfo.alts}></img>
    </div>
  )
}

export default Banner
