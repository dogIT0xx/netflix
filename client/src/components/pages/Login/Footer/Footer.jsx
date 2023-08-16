import classNames from 'classnames/bind'

import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
  return <footer className={cx('container')}></footer>
}

export default Footer
