import classNames from 'classnames/bind'

import styles from './Header.module.scss'
import { logo } from '~/assets/images'
import { Button, SelectLanguage } from '~/components/common'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('container')}>
      <img className={cx('logo')} src={logo} alt="Netflix" />
      <div className={cx('right')}>
        <SelectLanguage className={cx('select-language')} />
        <Button text="Sign In" size="size-s" to="/login"></Button>
      </div>
    </header>
  )
}

export default Header
