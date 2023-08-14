import classNames from 'classnames/bind'

import styles from '../styles/Header.module.scss'
import { logo } from '~/assets/images'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('container')}>
      <img className={cx('logo')} src={logo} alt="Netflix"></img>
    </header>
  )
}

export default Header
